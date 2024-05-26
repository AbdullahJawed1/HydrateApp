const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient("https://jurxnvcaqgooqpqgzkdi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1cnhudmNhcWdvb3FwcWd6a2RpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNjcwOTAyMSwiZXhwIjoyMDMyMjg1MDIxfQ.UaK5EngwB0iZwefXsN5JYYEoY0asWXAI3SeTrcQ96OY");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/intake', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('water_intake')
      .select('*')
      .eq('date', new Date().toISOString().split('T')[0]);
    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error("Error fetching daily water intake log:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/intake', async (req, res) => {
  const { amount } = req.body;
  try {
    const { data, error } = await supabase.from('water_intake').insert([{ amount, date: new Date() }]);
    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error("Error logging water intake:", err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/history', async (req, res) => {
  try {
    const { data, error } = await supabase.from('water_intake').select('*').order('date', { ascending: false });
    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error("Error fetching water intake history:", err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/goal', async (req, res) => {
  try {
    const { data, error } = await supabase.from('daily_goal').select('*').order('id', { ascending: false }).limit(1);
    if (error) throw error;
    res.json(data[0]);
  } catch (err) {
    console.error("Error fetching daily goal:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/goal', async (req, res) => {
  const { goal } = req.body;
  try {
    const { data, error } = await supabase.from('daily_goal').insert([{ goal }]);
    if (error) throw error;
    res.json(data[0]);
  } catch (err) {
    console.error("Error setting daily goal:", err);
    res.status(500).json({ error: err.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

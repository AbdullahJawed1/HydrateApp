// server/supabase.js
const { createClient } = require('@supabase/supabase-js');

const supabaseURL = 'https://jurxnvcaqgooqpqgzkdi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1cnhudmNhcWdvb3FwcWd6a2RpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNjcwOTAyMSwiZXhwIjoyMDMyMjg1MDIxfQ.UaK5EngwB0iZwefXsN5JYYEoY0asWXAI3SeTrcQ96OY';

const supabase = createClient(supabaseURL, supabaseKey);

module.exports = supabase;

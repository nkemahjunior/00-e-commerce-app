import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nfveqfruwcnhdggiiqys.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mdmVxZnJ1d2NuaGRnZ2lpcXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MzAwMDAsImV4cCI6MjAxMjAwNjAwMH0.J5Iaof7c3f8U12BabILQ6js1EqZnOaS2sMQPFvb6UwA"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
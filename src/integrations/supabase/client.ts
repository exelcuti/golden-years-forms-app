
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const supabaseUrl = "https://miizrxvapwvenjikfnrn.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1paXpyeHZhcHd2ZW5qaWtmbnJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NDk4NDEsImV4cCI6MjA2MDMyNTg0MX0.9nIITQ80813cxaaHl0xfeky5kR5HLs2mJwsj5v2JUNg"

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

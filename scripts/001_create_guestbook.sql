-- Create guestbook entries table
CREATE TABLE IF NOT EXISTS guestbook_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE guestbook_entries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public guestbook)
CREATE POLICY "Anyone can insert guestbook entries" 
  ON guestbook_entries 
  FOR INSERT 
  WITH CHECK (true);

-- Only authenticated users (you) can view entries
CREATE POLICY "Only authenticated users can view guestbook entries" 
  ON guestbook_entries 
  FOR SELECT 
  USING (auth.uid() IS NOT NULL);

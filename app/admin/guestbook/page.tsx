import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { GuestbookAdmin } from "@/components/admin/guestbook-admin"

export default async function AdminGuestbookPage() {
  const supabase = await createClient()

  const { data: userData, error: userError } = await supabase.auth.getUser()
  if (userError || !userData?.user) {
    redirect("/admin/login")
  }

  const { data: entries, error: entriesError } = await supabase
    .from("guestbook_entries")
    .select("*")
    .order("created_at", { ascending: false })

  return <GuestbookAdmin entries={entries || []} error={entriesError?.message || null} />
}

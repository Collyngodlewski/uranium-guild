import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export async function AuthButton() {
  const supabase = await createClient();
  // You can also use getUser() which will be slower.
  const { data } = await supabase.auth.getClaims();

  const user = data?.claims;

  

  const userId = user?.sub;

  let { data: profiles } = await supabase
    .from('profiles')
    .select('id, character_name, is_admin')
    .eq('id', userId ?? null);


  const isAdmin = profiles ? profiles[0].is_admin : null;
  const admin = isAdmin === true;

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {profiles[0].character_name ? profiles[0].character_name : 'Saladbar'}!
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/protected">Account</Link>
      </Button>
      { 
        admin && 
        <div>
        {/* <Button asChild size="sm" variant={"outline"}>
          <Link href="/admin">Admin</Link>
        </Button> */}
        
           <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">Admin</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Admin Panel</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup >
          <DropdownMenuRadioItem value="dashboard">
            <Link href="/admin">Dashboard</Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="applications">
            <Link href="/admin/applications">Applications</Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="droptimizer">
            <Link href="/admin/droptemizer">Droptimizer</Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="wow_audit">
            <Link href="/admin/wow_audit">Wow Audit</Link>
          </DropdownMenuRadioItem>
           <DropdownMenuRadioItem value="homepage_content">
            <Link href="/admin/homepage_content">Homepage Content</Link>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
        </div>
      }
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/auth/login">Sign in</Link>
      </Button>

      <Button asChild size="sm" variant={"default"}>
        <Link href="/auth/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}

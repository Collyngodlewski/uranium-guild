"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function UpdateAccountForm({
  className,
  ...props
  // Use props to default fill out information
}: React.ComponentPropsWithoutRef<"div">) {
  const [characterName, setCharacterName] = useState(props.profiles[0].character_name ?? '');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();


  const handleAccountUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.getClaims();

    try {
      const { error } = await supabase.from('profiles').update({ character_name: characterName}).eq('id',  data.claims.sub)
      if (error) throw error;
      // // Update this route to redirect to an authenticated route. The user already has an active session.
      router.refresh();
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Account Information</CardTitle>
          {/* <CardDescription>
            Update Information
          </CardDescription> */}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAccountUpdate}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="character_name">Character Name</Label>
                <Input
                  id="character_name"
                  type="character_name"
                  placeholder={characterName}
                  value={characterName}
                  onChange={(e) => setCharacterName(e.target.value)}
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Updating..." : "Update Account"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

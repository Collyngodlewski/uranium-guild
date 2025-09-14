"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ApplyForm() {
  const [discord, setDiscord] = useState('');
  const [character, setCharacter] = useState('');
  const [realm, setRealm] = useState('');
  const [role, setRole] = useState('');
  const [wowClass, setWowClass] = useState('');
  const [spec, setSpec] = useState('');
  const [logs, setLogs] = useState('');
  const [raider, setRaider] = useState('');
  const [experience, setExperience] = useState('');
  const [reason, setReason] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);
    setSuccess(false);
    const supabase = createClient();

    try {
      const { data, error } = await supabase
        .from('applications')
        .insert([
          { discord: discord,
            character: character,
            realm: realm,
            role: role,
            class: wowClass,
            spec: spec,
            logs: logs,
            raider: raider,
            experience: experience,
            reason: reason,
            feedback: feedback },
        ])
        .select();
      if (error) throw error;
      setSuccess(true);
    } catch (error: unknown) {
      setSubmitError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Tell us more about you!
              </CardTitle>
              <CardDescription>Fill out the information below and the officers will respond to your request within a couple days via Discord DM!</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="discord">Discord Name</Label>
                    <Input
                      id="discord"
                      type="text"
                      value={discord}
                      onChange={(e) => setDiscord(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">WoW Character Name</Label>
                    </div>
                    <Input 
                      id="character"
                      type="text"
                      placeholder="Include special characters"
                      value={character}
                      onChange={(e) => setCharacter(e.target.value)}
                      required />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="realm">Realm</Label>
                    </div>
                    <Input 
                      id="realm" 
                      type="text" 
                      value={realm}
                      onChange={(e) => setRealm(e.target.value)}
                      required />
                  </div>
                  <Select onValueChange={(value) => setRole(value)}>
                    <Label htmlFor="role">Role you are applying for</Label>
                    <SelectTrigger className="w-100">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Tank">Tank</SelectItem>
                        <SelectItem value="Healer">Healer</SelectItem>
                        <SelectItem value="Ranged Dps">Melee DPS</SelectItem>
                        <SelectItem value="Melee Dps">Ranged DPS</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select onValueChange={(value) => setWowClass(value)}>
                    <Label htmlFor="class">Select Your Class</Label>
                    <SelectTrigger className="w-100">
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Death Knight">Death Knight</SelectItem>
                        <SelectItem value="Demon Hunter">Demon Hunter</SelectItem>
                        <SelectItem value="Druid">Druid</SelectItem>
                        <SelectItem value="Evoker">Evoker</SelectItem>
                        <SelectItem value="Hunter">Hunter</SelectItem>
                        <SelectItem value="Mage">Mage</SelectItem>
                        <SelectItem value="Monk">Monk</SelectItem>
                        <SelectItem value="Paladin">Paladin</SelectItem>
                        <SelectItem value="Priest">Priest</SelectItem>
                        <SelectItem value="Rogue">Rogue</SelectItem>
                        <SelectItem value="Shaman">Shaman</SelectItem>
                        <SelectItem value="Warlock">Warlock</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="spec">Enter main spec</Label>
                    </div>
                    <Input
                      id="spec"
                      type="text"
                      placeholder="Your main spec"
                      value={spec}
                      onChange={(e) => setSpec(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="logs">Provide your Warcraft Logs Link</Label>
                    </div>
                    <Input
                      id="logs"
                      type="text"
                      placeholder="https://www.warcraftlogs.com/reports/example"
                      value={logs}
                      onChange={(e) => setLogs(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="raider">Provide your Raider IO Link</Label>
                    </div>
                    <Input
                      id="raider"
                      type="text"
                      placeholder="https://raider.io/characters/us/stormrage/coolkid"
                      value={raider}
                      onChange={(e) => setRaider(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="experience">What is your Mythic PVE experience in World of Warcraft? The more specific the better.</Label>
                    </div>
                    <Textarea
                      id="experience"
                      rows={4}
                      placeholder="Type your message here."
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="reason">Tell us about yourself and why you are looking to change guilds.</Label>
                    </div>
                    <Textarea
                      id="reason"
                      rows={4}
                      placeholder="Type your message here."                      
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2 mb-4">
                    <div className="flex items-center">
                      <Label htmlFor="questions">Additional questions or feedback.</Label>
                    </div>
                    <Textarea
                      id="feedback"
                      rows={4}
                      placeholder="Type your message here."                      
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {submitError && <p className="text-sm text-red-500">{submitError}</p>}
                <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Submitting application..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
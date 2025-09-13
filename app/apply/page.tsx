import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Apply() {
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
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="discord">Discord Name</Label>
                    <Input
                      id="discord"
                      type="discord"
                      placeholder="example#1234"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">WoW Character Name</Label>
                    </div>
                    <Input id="character" type="character" required />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="realm">Realm</Label>
                    </div>
                    <Input id="realm" type="realm" required />
                  </div>
                  <Select>
                    <Label htmlFor="role">Role you are applying for</Label>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="role_tank">Tank</SelectItem>
                        <SelectItem value="role_healer">Healer</SelectItem>
                        <SelectItem value="role_rangeddps">Melee DPS</SelectItem>
                        <SelectItem value="role_meleedps">Ranged DPS</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <Label htmlFor="class">Select Your Class</Label>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="class_death_knight">Death Knight</SelectItem>
                        <SelectItem value="class_demon_hunter">Demon Hunter</SelectItem>
                        <SelectItem value="class_druid">Druid</SelectItem>
                        <SelectItem value="class_evoker">Evoker</SelectItem>
                        <SelectItem value="class_hunter">Hunter</SelectItem>
                        <SelectItem value="class_mage">Mage</SelectItem>
                        <SelectItem value="class_monk">Monk</SelectItem>
                        <SelectItem value="class_paladin">Paladin</SelectItem>
                        <SelectItem value="class_priest">Priest</SelectItem>
                        <SelectItem value="class_rogue">Rogue</SelectItem>
                        <SelectItem value="class_shaman">Shaman</SelectItem>
                        <SelectItem value="class_warlock">Warlock</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="spec">Enter main spec</Label>
                    </div>
                    <Input
                      id="spec"
                      type="spec"
                      placeholder="Your main spec"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="logs">Provide your Warcraft Logs Link</Label>
                    </div>
                    <Input
                      id="logs"
                      type="logs"
                      placeholder="https://www.warcraftlogs.com/reports/example"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="raider">Provide your Raider IO Link</Label>
                    </div>
                    <Input
                      id="raider"
                      type="raider"
                      placeholder="https://raider.io/characters/us/stormrage/coolkid"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="experience">What is your Mythic PVE experience in World of Warcraft? The more specific the better.</Label>
                    </div>
                    <Input
                      id="experience"
                      type="experience"
                      required
                    />
                  </div>
                </div>
              </form>
              <p className="text-sm text-muted-foreground">
                You&apos;ve successfully signed up. Please check your email to
                confirm your account before signing in.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
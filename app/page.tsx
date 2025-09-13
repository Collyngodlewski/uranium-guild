import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import uraniumBanner from './uranium_banner.jpg'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-0 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 text-3xl items-center font-extralight">
              <Link href={"/"}>Uranium</Link>
            </div>
            {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
          </div>
        </nav>
            <Image
              src={uraniumBanner}
              sizes="100vw"
              alt="Uranium Banner"
              className="w-full"
            />
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          <Hero />
          
        </div>

        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
          {/* <p>
            Powered by{" "}
            <a
              href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              Supabase
            </a>
          </p> */}
        
          <p>Made with Love by{" "}
            <a
              href="https://worldofwarcraft.blizzard.com/en-us/character/us/stormrage/cheery"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              Cheery
            </a>
              {" "}&{" "}
            <a
              href="https://worldofwarcraft.blizzard.com/en-us/character/us/area-52/opalurook"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
            Opalurook
            </a>
          </p>
            <ThemeSwitcher />
        </footer>
      </div>
    </main>
  );
}

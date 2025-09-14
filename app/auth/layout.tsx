
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";

export default function Layout({children, }: {children: React.ReactNode;}) {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 text-xl items-center font-extralight">
              <Link href={"/"}>Uranium</Link>
              <Link href={"/apply"}>Apply</Link>
            </div>
            {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
          </div>
        </nav>
        <div className="flex-1 flex flex-col gap-20 min-w-5xl p-5">
          {children}
        </div>
        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
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

import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-0 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full  flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 text-xl items-center font-extralight">
              <Link href={"/"}>Uranium</Link>
              <Link href={"/apply"}>Apply</Link>
            </div>
            {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
          </div>
        </nav>
          <Hero />
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Mythic Guild on Stormrage-US</h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">We raid Tuesday & Wednesday from 8pm to 11pm EST.</p>
        <p class="mb-6 text-lg font-normal text-gray-900 lg:text-x1 sm:px-16 xl:px-48 dark:text-white">5/8M Manaforge Omega  **Currently Progging**</p>
        <p class="mb-6 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 xl:px-48 dark:text-white">CE Liberation of Undermine US Rank 476</p>
        <p class="mb-6 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 xl:px-48 dark:text-white">CE Nerubar Palace US Rank 606</p>
        <p class="mb-6 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 xl:px-48 dark:text-white">7/9M Amirdrassil, the Dream's Hope</p>
        <p class="mb-6 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 xl:px-48 dark:text-white">5/9M Aberrus, the Shadowed Crucible</p>
        <p class="mb-6 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 xl:px-48 dark:text-white">5/8M Vault of the Incarnates</p>
        <Link
          href="/apply"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mx-auto mb-16"
        >
          Apply Now!
          <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </Link>
          

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

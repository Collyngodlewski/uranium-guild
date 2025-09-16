import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { HomepageBackgroundImage } from "@/components/homepage-background";

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
        <div className=" flex flex-col items-center gap-28 w-full">
         
          <div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Mythic Guild on Stormrage-US</h1>
            <p className="mb-10 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">Raids Tuesday & Wednesday from 8pm to 11pm EST.</p>
            <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
          </div> 
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "2rem", width: "100%", justifyContent: "center" }}>
          <div style={{  overflow: "hidden", maxWidth: "100%" }}>
            <iframe
              src="https://raider.io/widgets/boss-progress?raid=latest&name_style=logo&difficulty=latest&region=us&realm=stormrage&guild=Uranium&boss=latest&period=until_kill&orientation=rect&hide=&chromargb=transparent&theme=dragonflight"
              width={500}
              height={260}
              style={{
                border: "none",
                marginBottom: "1.5rem",
                marginTop: "-32px",
                display: "block"
              }}
              title="Raider.IO Progress Widget"
              loading="lazy"
              allowTransparency={true}
            />
          </div>
          <div className="w-[500px] text-center">
            <p className="mb-6 text-lg font-normal text-gray-900 lg:text-xl  dark:text-white">CE Liberation of Undermine US Rank 476</p>
            <p className="mb-6 text-lg font-normal text-gray-900 lg:text-xl  dark:text-white">CE Nerubar Palace US Rank 606</p>
            <p className="mb-6 text-lg font-normal text-gray-900 lg:text-xl  dark:text-white">7/9M Amirdrassil, the Dream's Hope</p>
            <p className="mb-6 text-lg font-normal text-gray-900 lg:text-xl  dark:text-white">5/9M Aberrus, the Shadowed Crucible</p>
            <p className="mb-6 text-lg font-normal text-gray-900 lg:text-xl  dark:text-white">5/8M Vault of the Incarnates</p>
          </div>
        </div>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mx-auto mb-16"
          >
            Apply Now!
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </Link>
              <div className="homepage-image">
            <HomepageBackgroundImage />
          </div>
        </div>
  
        <footer className="w-full bg-[background] flex items-center justify-center border-t mx-auto mt-auto text-center text-xs gap-8 py-8">
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

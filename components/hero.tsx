import Image from "next/image";
import uraniumBanner from '../app/uranium_banner.jpg'

export function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center">
        
            <Image
              src={uraniumBanner}
              width={2550}
              height={2550}
              alt="Uranium Banner"
              // className="w-full"
            />
       
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}

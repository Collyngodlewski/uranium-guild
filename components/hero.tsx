import Image from "next/image";
import uraniumBanner from '../app/Toxic_Power__Uranium_Hazard_Logo.png'

export function Hero() {
  return (
    <div className="flex flex-col  items-center w-full  mb-8 ">
        <div className="uranium-banner w-full flex justify-center">
            <Image
              src={uraniumBanner}
              width={200}
              height={200}
              alt="Uranium Banner"
              className=""
            />
       </div>
      {/* <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" /> */}
    </div>
  );
}

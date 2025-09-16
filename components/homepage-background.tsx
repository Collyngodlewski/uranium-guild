import Image from "next/image";
import dimmy from '../app/dimensius.png'
import gally from '../app/chrome-king-gallywix.png'
import queen from '../app/queen-ansurek.png'

export function HomepageBackgroundImage() {
  return (
    <>
    <div className="fixed bottom-0 left-0 opacity-10 z-[-1]">
        <div className="">
            <Image
              src={dimmy}
              width={0}
              height={0}
              alt="Uranium Banner"
              className=""
            />
       </div>
    </div>
    <div className="hidden 4xl:block fixed bottom-0 left-[40%]  opacity-10 z-[-1]">
        <div className="">
            <Image
              src={gally}
              width={700}
              height={500}
              alt="Uranium Banner"
              className=""
            />
       </div>
    </div>
    <div className="hidden 3xl:block fixed bottom-0 right-0  opacity-10 z-[-1]">
        <div className="">
            <Image
              src={queen}
              width={0}
              height={0}
              alt="Uranium Banner"
              style={{ transform: "rotateY(180deg)" }}
            />
       </div>
    </div>
    </>
  );
}

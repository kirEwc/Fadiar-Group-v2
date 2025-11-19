import "@fontsource/just-me-again-down-here";
import SectionPromoHome1 from "@/section/home/sectionPromoHome1";
import BottomShadow from "@/component/ui/bottomShadow";
import SectionMoreproducts from "@/section/home/sectionMoreproducts";
import SectionPromoHome2 from "@/section/home/sectionPromoHome2";



export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full bg-white">

        <div>
          <SectionPromoHome1 />
          <div id="shadow-arrocera" className="flex justify-center relative left-44 top-[-110px]">
           <BottomShadow  width="200px" height="80px" opacity={0.6} />
          </div>
          <div id="shadow-reina" className="flex justify-center relative left-92 top-[-120px]">
           <BottomShadow  width="200px" height="80px" opacity={0.6} />
          </div>
        </div>

        <div>
          <SectionMoreproducts />
        </div>

        <div className="mt-10">
          <SectionPromoHome2/>
        </div>

     

      </div>
    </>
  );
}

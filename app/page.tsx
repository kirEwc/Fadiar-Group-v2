import "@fontsource/just-me-again-down-here";
import SectionPromoHome1 from "@/section/sectionPromoHome1";
import SectionMoreproducts from "@/section/sectionMoreproducts";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full bg-white">
        <div>
          <SectionPromoHome1 />
        </div>
        <div>
          <SectionMoreproducts />
        </div>
      </div>
    </>
  );
}

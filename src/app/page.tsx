import DesktopLanding from "@/components/landing/DesktopLanding";
import MobileLanding from "@/components/landing/MobileLanding";

export default function Home() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopLanding />
      </div>

      <div className="lg:hidden">
        <MobileLanding />
      </div>
    </>
  );
}

import {
  ProfileSection,
  Footer,
  Header,
  RecommendsSection,
  SummarySection,
  TitleSection,
  RecentWorkSection,
} from "../components";
import { useWindowSize } from "../hooks";

function MobileView() {
  return (
    <>
      <div className="mx-auto flex justify-center">
        <ProfileSection />
      </div>
      <div className="flex">
        <div className="mx-auto flex">
          <div className="max-w-[792px] mx-auto">
            <SummarySection />
            <RecentWorkSection />
            <RecommendsSection />
          </div>
        </div>
      </div>
    </>
  );
}

function DesktopView() {
  return (
    <div className="mx-auto flex gap-8 max-w-[1200px]">
      <ProfileSection />
      <div className="max-w-[792px] mx-auto">
        <SummarySection />
        <RecentWorkSection />
        <RecommendsSection />
      </div>
    </div>
  );
}

function HomePage() {
  const windowWidth = useWindowSize().width;

  return (
    <div>
      <Header />
      <div className="mx-4 mb-4">
        <TitleSection />
        {windowWidth < 600 ? <MobileView /> : <DesktopView />}
      </div>
      <Footer />
    </div>
  );
}

export { HomePage };

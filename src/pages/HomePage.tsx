import {
  ProfileSection,
  Footer,
  Header,
  RecommendsSection,
  SummarySection,
  TitleSection,
} from "../components";

function HomePage() {
  return (
    <>
      <Header />
      <div className="px-12">
        <TitleSection />
        <div className="mx-auto flex gap-6 max-w-[1200px] justify-center">
          <ProfileSection />
          <div className="flex-col">
            <SummarySection />
            <RecommendsSection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { HomePage };

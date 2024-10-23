import { Header } from "../components/pageSections/Header";

function TitlePage() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <section className="center">
          <h1 className="text-7xl mb-8 mt-8 text-center">Joshua Sikes</h1>
          <h3 className="text-3xl m-16 italic">Software Engineer</h3>
        </section>
      </div>
    </>
  );
}

export { TitlePage };

import { Header, Footer } from "../components/pageSections";
import {
  Quadratic,
  BioJazz,
  MacArthur,
  Pragmatic,
  Leon,
} from "../components/recommendLinks";

function RecommendationsPage() {
  return (
    <>
      <Header />
      <div className=" bg-[#E6E8E6] flex justify-center items-center h-[800px]">
        <section>
          <h2 className="text-3xl mb-16 text-center">Who I Recommend:</h2>
          <section>
            <ul className="flex flex-col justify-items-center justify-between sm:flex-row">
              <li className="m-4">
                <Quadratic />
              </li>
              <li className="m-4">
                <BioJazz />
              </li>
              <li className="m-4">
                <MacArthur />
              </li>
              <li className="m-4">
                <Pragmatic />
              </li>
              <li className="m-4">
                <Leon />
              </li>
            </ul>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}

export { RecommendationsPage };

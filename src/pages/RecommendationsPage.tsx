import { Header, Footer } from "../components/pageSections";
import { RecommendationTag } from "../components";

function RecommendationsPage() {
  return (
    <>
      <Header />
      <div className=" bg-[#E6E8E6] flex justify-center items-center h-[800px]">
        <section>
          <ul className="flex flex-col justify-items-center justify-between">
            <li className="m-4">
              <RecommendationTag
                displayText="DeathByQuadratic"
                linkAddress="https://www.deathbyquadratic.com/"
              />
            </li>
            <li className="m-4">
              <RecommendationTag
                displayText="Biodigital Jazz"
                linkAddress="https://www.biodigitaljazz.tech/"
              />
            </li>
            <li className="m-4">
              <RecommendationTag
                displayText="Pragmatic Studio"
                linkAddress="https://pragmaticstudio.com/"
              />
            </li>
            <li className="m-4">
              <RecommendationTag
                displayText="#100Devs"
                linkAddress="https://leonnoel.com/100devs/"
              />
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
}

export { RecommendationsPage };

import { RecommendationTag } from "../RecommendationTag";

function RecommendsSection() {
  return (
    <div>
      <div className="bg-[#487DC0] text-white rounded-lg p-7 sm:p-8">
        <p className="text-xl mb-4">Resources I use and Recommend:</p>
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
    </div>
  );
}

export { RecommendsSection };

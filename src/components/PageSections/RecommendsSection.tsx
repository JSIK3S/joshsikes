import { RecommendationTag } from "../RecommendationTag";

function RecommendsSection() {
  return (
    <div>
      <div className="bg-[#487DC0] text-white rounded-lg p-7 sm:p-8 flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-start">
        <section className="mb-8">
          <p className="text-xl mb-4">People I follow:</p>
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
                displayText="#100Devs"
                linkAddress="https://leonnoel.com/100devs/"
              />
            </li>
          </ul>
        </section>

        <section>
          <p className="text-xl mb-4">Places I learn:</p>
          <ul className="flex flex-col justify-items-center justify-between">
            <li className="m-4">
              <RecommendationTag
                displayText="Pragmatic Studio"
                linkAddress="https://pragmaticstudio.com/"
              />
            </li>
            <li className="m-4">
              <RecommendationTag
                displayText="TypeAlias Studios"
                linkAddress="https://typealias.com/start/"
              />
            </li>
          </ul>
        </section>

        <section>
          <p className="text-xl mb-4">Books I Recommend:</p>
          <ul className="flex flex-col justify-items-center justify-between">
            <li className="m-4">
              <RecommendationTag displayText="Clean Code" linkAddress="" />
            </li>
            <li className="m-4">
              <RecommendationTag
                displayText="Continuous Discovery Habits"
                linkAddress=""
              />
            </li>
            <li className="m-4">
              <RecommendationTag displayText="AI Engineering" linkAddress="" />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export { RecommendsSection };

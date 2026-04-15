import { RecommendationTag } from "../RecommendationTag";

function RecommendsSection() {
  return (
    <div>
      <div className="bg-[#487DC0] text-white rounded-lg p-7 sm:p-8 flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-start">
        <section>
          <p className="text-xl mb-4">People I follow:</p>
          <ul className="flex flex-col justify-items-center justify-between">
            <li className="m-4">
              <RecommendationTag
                displayText="DHH"
                linkAddress="https://world.hey.com/dhh"
              />
            </li>
            <li className="m-4">
              <RecommendationTag
                displayText="Boris Cherny"
                linkAddress="https://borischerny.com/"
              />
            </li>
            <li className="m-4">
              <RecommendationTag
                displayText="Gergely"
                linkAddress="https://www.pragmaticengineer.com/"
              />
            </li>
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
            <li className="m-4">
              <RecommendationTag
                displayText="Frontend Masters"
                linkAddress="https://frontendmasters.com/courses/algorithms/"
              />
            </li>
          </ul>
        </section>

        <section>
          <p className="text-xl mb-4">Books I Recommend:</p>
          <ul className="flex flex-col justify-items-center justify-between">
            <li className="m-4">
              <RecommendationTag
                displayText="Clean Code"
                linkAddress="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
              />
            </li>
            <li className="m-4">
              <RecommendationTag
                displayText="Continuous Discovery Habits"
                linkAddress="https://www.producttalk.org/continuous-discovery-habits/"
              />
            </li>
            <li className="m-4">
              <RecommendationTag
                displayText="AI Engineering"
                linkAddress="https://www.oreilly.com/library/view/ai-engineering/9781098166298/"
              />
            </li>
            <li className="m-4">
              <RecommendationTag
                displayText="Engineer's Guidebook"
                linkAddress="https://www.engguidebook.com/"
              />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export { RecommendsSection };

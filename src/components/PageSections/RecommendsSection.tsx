import { Quadratic, BioJazz, Pragmatic, Leon } from "../recommendLinks";

function RecommendsSection() {
  return (
    <div className="sm:max-w-xl">
      <div className="bg-[#487DC0] text-white rounded-lg p-7 sm:p-8">
        <p className="text-xl mb-4">Resource I use and Recommend:</p>
        <section>
          <ul className="flex flex-col justify-items-center justify-between">
            <li className="m-4">
              <Quadratic />
            </li>
            <li className="m-4">
              <BioJazz />
            </li>
            <li className="m-4">
              <Pragmatic />
            </li>
            <li className="m-4">
              <Leon />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export { RecommendsSection };

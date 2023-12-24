import { BioJazz } from "../recommendLinks/BioJazz";
import { Leon } from "../recommendLinks/Leon";
import { MacArthur } from "../recommendLinks/MacArthur";
import { Pragmatic } from "../recommendLinks/Pragmatic";
import { Quadratic } from "../recommendLinks/Quadratic";

function Recommends() {
  return (
    <div className=" bg-[#E6E8E6] flex justify-center items-center h-[800px]">
      <section id="recommends">
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
  );
}

export { Recommends };

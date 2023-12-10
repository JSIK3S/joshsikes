import { BioJazz } from "../recommendLinks/BioJazz";
import { Leon } from "../recommendLinks/Leon";
import { MacArthur } from "../recommendLinks/MacArthur";
import { Pragmatic } from "../recommendLinks/Pragmatic";
import { Quadratic } from "../recommendLinks/Quadratic";

function Recommends() {
  return (
    <div className="h-screen bg-slate-300 flex justify-center items-center">
      <section id="recommends">
        <h2 className="text-3xl mb-16">Who I Recommend:</h2>
        <section>
          <ul className="flex justify-items-center justify-between">
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

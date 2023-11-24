import { BioJazz } from "../recommendLinks/BioJazz";
import { Leon } from "../recommendLinks/Leon";
import { MacArthur } from "../recommendLinks/MacArthur";
import { Pragmatic } from "../recommendLinks/Pragmatic";
import { Quadratic } from "../recommendLinks/Quadratic";

function Recommends() {
  return (
    <div className="h-80 bg-slate-300">
      <section id="recommends">
        <h2>Who I Recommend:</h2>
        <ul>
          <li>
            <Quadratic />
          </li>
          <li>
            <BioJazz />
          </li>
          <li>
            <MacArthur />
          </li>
          <li>
            <Pragmatic />
          </li>
          <li>
            <Leon />
          </li>
        </ul>
      </section>
    </div>
  );
}

export { Recommends };

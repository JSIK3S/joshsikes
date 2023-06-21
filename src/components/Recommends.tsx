import { Leon } from "./RecommendLinks/Leon";
import { MacArthur } from "./RecommendLinks/MacArthur";
import { Pragmatic } from "./RecommendLinks/Pragmatic";
import { Quadratic } from "./RecommendLinks/Quadratic";

function Recommends (){
  return (
    <div>
      <h2>Who I Recommend:</h2>
      <ul>
        <li>
          <Quadratic />
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
    </div>
  );
};

export {Recommends};

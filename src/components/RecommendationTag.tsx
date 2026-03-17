interface RecommendationTagProps {
  displayText: string;
  linkAddress: string;
}

function RecommendationTag(props: RecommendationTagProps) {
  return (
    <button className="rounded-full bg-gray-200 p-2 w-40 hover:bg-gray-300 transition-colors">
      <a
        href={props.linkAddress}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900"
      >
        {props.displayText}
      </a>
    </button>
  );
}

export { RecommendationTag };

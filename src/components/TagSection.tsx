export type ProfileTag = {
  skillText: string;
  linkAddress: string;
};

export type TagSectionContent = {
  title: string;
  tags: ProfileTag[];
};

function Tag({ skillText, linkAddress }: ProfileTag) {
  return (
    <a
      href={linkAddress}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center px-3 py-1 
        rounded-full bg-gray-400 text-gray-800 
        text-sm font-medium
        hover:bg-gray-300 transition-colors
      "
    >
      {skillText}
    </a>
  );
}

// ────────────────────────────────────────────────

function TagSection({ title, tags }: Readonly<TagSectionContent>) {
  return (
    <div className="space-y-3 mb-8">
      {/* Optional: show the section title */}
      {title && (
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      )}

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag
            key={tag.skillText} // or use a unique id if available
            skillText={tag.skillText}
            linkAddress={tag.linkAddress}
          />
        ))}
      </div>
    </div>
  );
}

export { Tag, TagSection };

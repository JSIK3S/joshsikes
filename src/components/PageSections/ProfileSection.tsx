import { TagSection, ProfileTag, TagSectionContent } from "../TagSection";

const skillsSection: TagSectionContent = {
  title: "My Technologies:",
  tags: [
    { skillText: "React", linkAddress: "https://react.dev" },
    { skillText: "TypeScript", linkAddress: "https://typescriptlang.org" },
    { skillText: "Ruby", linkAddress: "https://ruby-doc.org/" },
    { skillText: "Rails", linkAddress: "https://guides.rubyonrails.org/" },
    { skillText: "Tailwind", linkAddress: "https://tailwindcss.com" },
    { skillText: "Kotlin", linkAddress: "https://kotlinlang.org/" },
    { skillText: "Spring", linkAddress: "https://spring.io/" },
    { skillText: "PostgreSQL", linkAddress: "https://www.postgresql.org/" },
  ],
};

const toolsSection: TagSectionContent = {
  title: "My Tools:",
  tags: [
    {
      skillText: "Claude Code",
      linkAddress: "https://claude.com/product/claude-code",
    },
    { skillText: "AWS", linkAddress: "https://aws.amazon.com/" },
    { skillText: "Dynatrace", linkAddress: "https://www.dynatrace.com/" },
    {
      skillText: "Kanban",
      linkAddress: "https://www.atlassian.com/agile/kanban",
    },
  ],
};

function ProfileSection() {
  return (
    <div className="sm:max-w-md">
      <div className="bg-gray-200 text-gray-900 rounded-lg sm:mx-auto h-fit sticky top-2 mb-8 sm:mb-16">
        <div className="flex flex-col items-center p-7 sm:p-8 mb-8">
          <img
            src="/joshsikes/assets/profilepic.jpg"
            alt="Josh Sikes Headshot"
            className="rounded-full border-4 border-black sm:max-h-[200px] sm:max-w-[200px] mb-8"
          />
          <div className="flex flex-col items-start mb-8 w-full">
            <p className="text-lg font-semibold text-gray-800">Josh Sikes</p>
            <p>4 years of software experience</p>
            <p>Nashville, TN</p>
          </div>
          <div>
            <TagSection {...skillsSection} />
            <TagSection {...toolsSection} />
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProfileSection };

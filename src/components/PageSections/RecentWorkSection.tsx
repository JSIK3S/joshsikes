function RecentWorkSection() {
  return (
    <div>
      <div className="bg-gray-200 text-gray-900 rounded-lg mb-8 p-7 sm:p-8">
        <p className="text-2xl mb-8">Recent Work:</p>
        <p className="text-xl mb-4">@Ramsey Solutions</p>
        <section>
          <ul>
            <li className="mb-2">
              - Built a quiz to recommend the best tax product based on the
              customers financial situation
            </li>
            <li className="mb-2">
              - Create & maintain custom frontend experiences for lead
              generation forms, results pages, & lead management portals
            </li>
            <li className="mb-2">
              - Incorporating & leveraging AI tools like Claude Code into our
              development process
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export { RecentWorkSection };

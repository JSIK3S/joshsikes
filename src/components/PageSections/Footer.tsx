import { GitLabProfileLink } from "../socialLinks/GitLabProfileLink";
import { GithubProfileLink } from "../socialLinks/GithubProfileLink";
import { LinkedInLink } from "../socialLinks/LinkedInLink";

function Footer() {
  return (
    <footer className="h-20">
      <div className="flex">
        <section className="m-8">
          <LinkedInLink />
        </section>
        <section className="m-8">
          <GithubProfileLink />
        </section>
        <section className="m-8">
          <GitLabProfileLink />
        </section>
      </div>
    </footer>
  );
}

export { Footer };

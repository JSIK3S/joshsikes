import { GitLabProfileLink } from "../socialLinks/GitLabProfileLink";
import { GithubProfileLink } from "../socialLinks/GithubProfileLink";
import { LinkedInLink } from "../socialLinks/LinkedInLink";
import { GitLabIcon } from "../techIcons/GitLabIcon";
import { GithubIcon } from "../techIcons/GithubIcon";
import { LinkedInIcon } from "../techIcons/LinkedInIcon";

function Footer() {
  return (
    <footer className="h-20">
      <div className="hidden sm:flex">
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
      <div className="flex sm:hidden">
        <section className="m-4">
          <GithubIcon />
        </section>
        <section className="m-4">
          <GitLabIcon />
        </section>
        <section className="m-4">
          <LinkedInIcon />
        </section>
      </div>
    </footer>
  );
}

export { Footer };

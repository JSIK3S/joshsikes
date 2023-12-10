import { GithubProfileLink } from "../socialLinks/GithubProfileLink";
import { LinkedInLink } from "../socialLinks/LinkedInLink";

function Footer() {
  return (
    <footer className="h-40">
      <div>
        <section className="m-8">
          <LinkedInLink />
        </section>
        <section className="m-8">
          <GithubProfileLink />
        </section>
      </div>
    </footer>
  );
}

export { Footer };

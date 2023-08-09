import GitHubLogo from '../publics/gitHubLogo';
import InstagramLogo from '../publics/InstagramLogo';
import LinkedinLogo from '../publics/LinkedinLogo';

export default function Footer() {
  return (
    <footer className="relative pt-8 pb-6 flex justify-center flex-col text-white">
      <hr />
      <div className="my-8">
        <p className="px-3 text-center">
          Copyright © 2023 All rights reserved | Made with ❤ by{' '}
          <span className="text-blue-500">ogabrielf</span>
        </p>
      </div>
      <div className="flex justify-center mb-8 gap-5">
        <a
          className="w-14 h-14 bg-slate-400/10 rounded-full flex justify-center items-center"
          href="https://github.com/ogabrielfef"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubLogo />
        </a>
        <a
          className="w-14 h-14 bg-slate-400/10 rounded-full flex justify-center items-center"
          href="https://www.instagram.com/ogabrielfef/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramLogo />
        </a>
        <a
          className="w-14 h-14 bg-slate-400/10 rounded-full flex justify-center items-center"
          href="https://www.linkedin.com/in/gabrielferreiraf/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo />
        </a>
      </div>
    </footer>
  );
}

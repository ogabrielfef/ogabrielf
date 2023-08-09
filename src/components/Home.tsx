/* eslint-disable react/no-unescaped-entities */
import CssLogo from '../publics/cssLogo';
import GitLogo from '../publics/gitLogo';
import JestLogo from '../publics/jestLogo';
import MySqlLogo from '../publics/mySql';
import NextLogo from '../publics/nextLogo';
import NodeLogo from '../publics/nodeLogo';
import ReactLogo from '../publics/reactLogo';
import Tailwind from '../publics/tailwindLogo';
import TypescriptLogo from '../publics/typescriptLogo';

export default function Home() {
  return (
    <div
      id="home"
      className="flex flex-col h-screen w-full justify-center items-center text-center text-white py-5"
    >
      <h2 className="text-5xl font-light">Hello, I'm</h2>
      <h1 className="text-7xl">Gabriel Ferreira</h1>
      <p className="text-base font-semibold">• Front-End Developer •</p>
      <div className="flex gap-7 mt-14 px-10 flex-wrap justify-center">
        <span className="rounded-full w-14 h-14 flex justify-center items-center hover:bg-slate-400/10">
          <ReactLogo />
        </span>
        <span className="rounded-full w-14 h-14 flex justify-center items-center hover:bg-slate-400/10">
          <NextLogo />
        </span>
        <span className="rounded-full w-14 h-14 flex justify-center items-center hover:bg-slate-400/10">
          <Tailwind />
        </span>
        <span className="rounded-full w-14 h-14 flex justify-center items-center hover:bg-slate-400/10">
          <TypescriptLogo />
        </span>
        <span className="rounded-full w-14 h-14 flex justify-center items-center hover:bg-slate-400/10">
          <NodeLogo />
        </span>
        <span className="rounded-full w-14 h-14 flex justify-center items-center hover:bg-slate-400/10">
          <CssLogo />
        </span>
        <span className="rounded-full w-14 h-14 flex justify-center items-center hover:bg-slate-400/10">
          <GitLogo />
        </span>
        <span className="rounded-full w-14 h-14 flex justify-center items-center hover:bg-slate-400/10">
          <JestLogo />
        </span>
        <span className="rounded-full w-14 h-14 flex justify-center items-center hover:bg-slate-400/10">
          <MySqlLogo />
        </span>
      </div>
    </div>
  );
}

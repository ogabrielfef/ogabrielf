import CodeIcon from '@/publics/code';
import DatabaseIcon from '@/publics/database';
import InterfaceIcon from '@/publics/interface';

export default function Services() {
  return (
    <div
      className="flex flex-col h-auto w-full text-center items-center justify-center text-white py-5 my-12 max-w-7xl"
      translate="no"
    >
      <h3 className="text-5xl font-light w-full pb-6 mb-12">My Services</h3>
      <div className="flex gap-5 justify-center flex-wrap">
        <div className="w-72 h-72 bg-slate-400/10 border p-5">
          <InterfaceIcon />
          <h4 className="text-2xl text-left font-medium my-3">Interfaces</h4>
          <p className="text-left">
            Creation and implementation of intuitive, modern and responsive
            interfaces for your business.
          </p>
        </div>
        <div className="w-72 h-72 bg-slate-400/10 border p-5">
          <CodeIcon />
          <h4 className="text-2xl text-left font-medium my-3">
            Desenvolvimento
          </h4>
          <p className="text-left">
            I create professional and personal websites, blogs, portfolios,
            landing pages and web apps.
          </p>
        </div>
        <div className="w-72 h-72 bg-slate-400/10 border p-5">
          <DatabaseIcon />
          <h4 className="text-2xl text-left font-medium my-3">API's</h4>
          <p className="text-left">
            Creation, implementation and updating of database and API's.
          </p>
        </div>
      </div>
    </div>
  );
}

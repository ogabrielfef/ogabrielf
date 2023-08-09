import CalendarIcon from '@/publics/calendar';

export default function Resume() {
  return (
    <div
      translate="no"
      id="resume"
      className="flex flex-col h-auto w-full text-center items-center justify-center text-white py-5 mb-12 max-w-7xl"
    >
      <h3 className="text-5xl font-light w-full pb-6 mb-12 my-12">Resume</h3>
      <div className="flex flex-wrap gap-5 justify-center">
        <div className="flex flex-col gap-y-4">
          <h4 className="text-xl text-left font-medium">Education</h4>
          <div className="w-90 h-64 bg-slate-400/10 p-6 rounded-2xl sm:w-128 text-left md:h-56">
            <span className="flex items-center gap-2 text-sm">
              <CalendarIcon /> <p>Fev 2022 - Jan 2023</p>
            </span>
            <h3 className="text-xl text-left font-medium text-blue-500 my-2">
              Web development
            </h3>
            <p>
              Web development bootcamp. The course has more than 1,500 hours of
              classes and addresses several technical and behavioral skills
              desired in the market.
            </p>
            <p className="mt-2">Trybe</p>
          </div>
          <div className="w-90 h-64 bg-slate-400/10 p-6 rounded-2xl sm:w-128 text-left md:h-56">
            <span className="flex items-center gap-2 text-sm">
              <CalendarIcon /> <p>Mar 2020 - Out 2021</p>
            </span>
            <h3 className="text-xl text-left font-medium text-blue-500 my-2">
              Civil engineering
            </h3>
            <p>
              University of civil engineering, cursed for 3 semesters. Civil
              engineering is the branch of engineering that trains professionals
              for work in civil and urban construction.
            </p>
            <p className="mt-2">Instituto Federal de Minas Gerais</p>
          </div>
          <div className="w-90 h-64 bg-slate-400/10 p-6 rounded-2xl sm:w-128 text-left md:h-56">
            <span className="flex items-center gap-2 text-sm">
              <CalendarIcon /> <p>Feb 2017 - Jun 2018</p>
            </span>
            <h3 className="text-xl text-left font-medium text-blue-500 my-2">
              Telecommunications
            </h3>
            <p>
              Training to install and repair telephony networks and equipment,
              offering technical support for equipment and programs.
            </p>
            <p className="mt-2">Instituto Federal de Minas Gerais</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <h4 className="text-xl text-left font-medium">Experience</h4>
          <div className="w-90 h-64 bg-slate-400/10 p-6 rounded-2xl sm:w-128 text-left md:h-56">
            <span className="flex items-center gap-2 text-sm">
              <CalendarIcon /> <p>Set 2022 - Atualmente</p>
            </span>
            <h3 className="text-xl text-left font-medium text-blue-500 my-2">
              Frontend developer
            </h3>
            <p>
              Develop and update web pages, implement sections, features and
              functions to existing applications.
            </p>
            <br />
            <p className="mt-2">Freelancer</p>
          </div>
          <div className="w-90 h-64 bg-slate-400/10 p-6 rounded-2xl sm:w-128 text-left md:h-56">
            <span className="flex items-center gap-2 text-sm">
              <CalendarIcon /> <p>Dez 2018 - Jan 2023</p>
            </span>
            <h3 className="text-xl text-left font-medium text-blue-500 my-2">
              Kitchen assistant / Attendant
            </h3>
            <p>
              Attendant customers by taking orders. assisting with food
              preparation in the kitchen of a hamburger shop.
            </p>
            <br />
            <p className="mt-2">Fornalha Hamburgueria - Burguer Shop</p>
          </div>
        </div>
      </div>
    </div>
  );
}

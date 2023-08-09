import Image from 'next/image';

import emBreve from '../../public/Coming-soon.png';
import recipesCapa from '../utils/recipes.jpg';

export default function Portifolio() {
  return (
    <div
      id="portifolio"
      className="flex flex-col h-auto w-full text-center items-center text-white py-5 max-w-7xl"
    >
      <h3
        className="text-5xl font-light w-full pb-6 mb-12 my-12"
        translate="no"
      >
        Portifolio
      </h3>
      <div className="flex flex-wrap gap-5 max-w-7xl justify-center ">
        <div className="pb-3">
          <a
            target="_blank"
            href="https://github.com/ogabrielfef/Recipes-APP"
            rel="noreferrer"
          >
            <div className="w-80 h-80">
              <Image
                src={recipesCapa}
                alt="oi"
                className="w-80 h-80 object-center object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col flex-wrap w-80">
              <p className="text-xl font-medium text-blue-500">Recipes</p>
              <p>Food and drink recipe web application.</p>
            </div>
          </a>
        </div>
        <div className="pb-3">
          <a>
            <div className="w-80 h-80">
              <Image
                src={emBreve}
                alt="oi"
                className="w-80 h-80 object-center object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col flex-wrap w-80">
              <p className="text-xl font-medium text-blue-500">Coming soon</p>
              <p>
                This project undergoing changes. More details coming soon. ❤️
              </p>
            </div>
          </a>
        </div>
        <div className="pb-3">
          <a>
            <div className="w-80 h-80">
              <Image
                src={emBreve}
                alt="oi"
                className="w-80 h-80 object-center object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col flex-wrap w-80">
              <p className="text-xl font-medium text-blue-500">Coming soon</p>
              <p>
                This project undergoing changes. More details coming soon. ❤️
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

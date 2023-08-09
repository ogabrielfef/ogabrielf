import Image from 'next/image';

import perfil from '../../public/perfil.jpeg';

export default function About() {
  return (
    <div
      id="about"
      className="flex gap-5 h-auto w-full text-center justify-center text-white py-5 my-12 max-w-7xl"
    >
      <div className="flex mt-12 justify-center flex-wrap gap-4">
        <div>
          <Image
            src={perfil}
            alt="oi"
            className="w-80 h-80 object-center object-cover rounded-full"
          />
        </div>
        <div className="w-96 h-80 flex flex-col p-3 gap-5">
          <h3 className="text-2xl text-left font-medium" translate="no">
            About Me
          </h3>
          <p className="text-lg text-left pb-8">
            My name is Gabriel Ferreira. I work as a freelance Front End
            Developer. I create websites with beautiful, intuitive and
            responsive interfaces.
          </p>
          <div className="flex gap-x-5 justify-center">
            <a
              id="button"
              className="flex items-center cursor-pointer"
              href="#contact"
            >
              <span id="button-content">HIRE ME</span>
            </a>
            <a
              id="button"
              className="flex items-center cursor-pointer"
              download="Gabriel-Ferreira-currículo"
            >
              <span id="button-content">DOWNLOAD CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

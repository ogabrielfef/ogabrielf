'use client';

import { useState } from 'react';

import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };

    emailjs
      .send(
        'service_2oln3do',
        'template_gzuwndl',
        templateParams,
        'uwevrN3hKBI8MOo26'
      )
      .then(
        (response) => {
          console.log(response);
          setName('');
          setEmail('');
          setMessage('');
        },
        (err) => {
          alert(err);
        }
      );
  }

  return (
    <div
      id="contact"
      className="flex flex-col h-auto w-full text-center items-center justify-center text-white py-5 my-12 max-w-7xl"
    >
      <div>
        <h3 className="text-5xl font-light w-full pb-6 mb-12">Get In Touch</h3>
      </div>
      <div className="flex gap-9 flex-wrap justify-center">
        <form
          className="flex flex-col gap-5 w-90 md:w-128"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            className="w-full h-12 px-4 rounded-md bg-slate-400/10"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />

          <input
            type="email"
            className="w-full h-12 px-4 rounded-md bg-slate-400/10"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />

          <textarea
            cols={30}
            rows={30}
            className="w-full h-48 px-4 py-4 rounded-md bg-slate-400/10 resize-none"
            placeholder="Write a Message..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          ></textarea>

          <input
            id="button-submit"
            type="submit"
            value="Send Message"
            className="w-40 h-12 rounded-3xl cursor-pointer"
          />
        </form>
        <div className="flex flex-col w-full md:w-auto text-left px-4">
          <h3 className="text-2xl text-left font-medium py-4">
            Contact Details
          </h3>
          <div className="pb-2">
            <p className="text-blue-500 text-sm pb-1">EMAIL</p>
            <p>ogabrielfef@gmail.com</p>
          </div>
          <div className="pb-2">
            <p className="text-blue-500 text-sm pb-1">PHONE</p>
            <p>+55 35 99882 2647</p>
          </div>
          <div className="pb-2">
            <p className="text-blue-500 text-sm pb-1">ADDRESS</p>
            <p>Brazil, MG</p>
          </div>
        </div>
      </div>
    </div>
  );
}

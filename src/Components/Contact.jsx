import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("sending");

    setTimeout(() => {
      setResult("success");
      event.target.reset();

      setTimeout(() => setResult(""), 3000);
    }, 1000);
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 relative">


      {result === "success" && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 
                        bg-gradient-to-r from-[#749DD0] to-[#eb98eb] 
                        text-white px-6 py-3 rounded-xl shadow-lg 
                        animate-bounce z-50">
          Message envoyée avec succès 💌
        </div>
      )}

      <h4 className="text-center mb-2 text-lg font-Ovo">
        Connect with me
      </h4>

      <h2
        className="text-center text-5xl font-Ovo text-[#749DD0]"
        data-aos="zoom-in-down"
      >
        Get in touch
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I&apos;d love to hear from you! Please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">

        <div className="grid md:grid-cols-2 gap-6 mt-10 mb-8">

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="px-4 py-3 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-[#749DD0]
                       focus:scale-105 transition-all duration-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="px-4 py-3 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-[#749DD0]
                       focus:scale-105 transition-all duration-300"
          />
        </div>

        <textarea
          rows="6"
          name="message"
          placeholder="Enter your message"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6
                     focus:outline-none focus:ring-2 focus:ring-[#749DD0]
                     focus:scale-[1.02] transition-all duration-300"
        ></textarea>

        <button
          type="submit"
          className="py-3 px-10 rounded-full mx-auto block text-white
                     bg-gradient-to-r from-[#749DD0] to-[#eb98eb]
                     hover:scale-105 hover:shadow-xl
                     transition-all duration-300 cursor-pointer"
        >
          Submit now
        </button>

        {result === "sending" && (
          <p className="text-center mt-4 text-gray-500 animate-pulse">
            Sending...
          </p>
        )}

      </form>
    </div>
  );
}
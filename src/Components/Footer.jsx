export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="mt-24 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-xl font-semibold mb-4">Housna Fathi</h2>
            <p className="text-sm leading-relaxed">
              Junior Full-Stack Developer passionate about building modern web
              applications using React and Laravel. I love clean UI and efficient backend logic.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#749DD0] transition">Home</a></li>
              <li><a href="#about" className="hover:text-[#749DD0] transition">About</a></li>
              <li><a href="#education" className="hover:text-[#749DD0] transition">Education</a></li>
              <li><a href="#experience" className="hover:text-[#749DD0] transition">Experience</a></li>
              <li><a href="#work" className="hover:text-[#749DD0] transition">Work</a></li>
              <li><a href="#contact" className="hover:text-[#749DD0] transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:housnafathi@gmail.com" className="flex items-center gap-3">
                <span className="w-12 h-12 flex items-center justify-center text-white 
                    bg-gradient-to-r from-[#749DD0] to-[#eb98eb]
                    rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 text-2xl">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <span className="text-black dark:text-white text-sm hover:text-[#749DD0]">Housnafathi@gmail.com</span>
              </a>

              <a href="https://github.com/housna11" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <span className="w-12 h-12 flex items-center justify-center text-white 
                    bg-gradient-to-r from-[#749DD0] to-[#eb98eb]
                    rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 text-2xl">
                  <i className="fa-brands fa-github"></i>
                </span>
                <span className="text-black dark:text-white text-sm hover:text-[#749DD0]">Housna11</span>
              </a>

              <a href="https://www.linkedin.com/in/housna-fathi-131ab8346" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <span className="w-12 h-12 flex items-center justify-center text-white 
                    bg-gradient-to-r from-[#749DD0] to-[#eb98eb]
                    rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 text-2xl">
                  <i className="fa-brands fa-linkedin"></i>
                </span>
                <span className="text-black dark:text-white text-sm hover:text-[#749DD0] break-words">Housna Fathi</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 text-center text-sm py-4">
          © {new Date().getFullYear()} Housna Fathi. All rights reserved.
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className="fixed right-6 bottom-6 w-12 h-12 flex items-center justify-center
          bg-gradient-to-r from-[#749DD0] to-[#eb98eb] text-white rounded-full shadow-lg 
          hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer
          z-[1000] md:bottom-6" 
      >
        <i className="fa-solid fa-arrow-up animate-bounce"></i>
      </button>
    </>
  );
}
export default function Footer() {
  return (
    <footer className="mt-24 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">

      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Column 1 - About */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Housna Fathi</h2>
          <p className="text-sm leading-relaxed">
            Junior Full-Stack Developer passionate about building modern web
            applications using React and Laravel. I love clean UI and efficient backend logic.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#749DD0] transition">Home</a></li>
            <li><a href="#about" className="hover:text-[#749DD0] transition">About</a></li>
            <li><a href="#work" className="hover:text-[#749DD0] transition">My Work</a></li>
            <li><a href="#contact" className="hover:text-[#749DD0] transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
    <div>
        <h3 className="text-lg font-semibold mb-4">Contact</h3>

        {/* Email */}
        <div className="flex items-center gap-3 mb-3">
            <i class="fa-solid fa-envelope"></i><a href="housnafathi@gmail.com"className="text-sm hover:text-[#749DD0] transition">housnafathi@gmail.com</a>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-3 mb-3">
            <i class="fa-brands fa-github"></i><a href="https://github.com/housna11"className="text-sm hover:text-[#749DD0] transition">housna11</a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-3">
            <i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/housna-fathi-131ab8346"className="text-sm hover:text-[#749DD0] transition">housna fathi</a>
        </div>
    </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 dark:border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} Housna Fathi. All rights reserved.
      </div>

    </footer>
  );
}
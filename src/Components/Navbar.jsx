import { useEffect, useRef } from 'react'

export default function Navbar() {
    const sideMenuRef = useRef();
    const navRef = useRef();
    const navLinkRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.right = "0";
    }

    const closeMenu = () => {
        sideMenuRef.current.style.right = "-16rem";
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                navRef.current.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm');
                navLinkRef.current.classList.remove('bg-white','shadow-sm','bg-opacity-50');
            } else {
                navRef.current.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm');
                navLinkRef.current.classList.add('bg-white','shadow-sm','bg-opacity-50');
            }
        })
    }, [])

    return (
        <>
            <div className="hidden md:block fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
                <img src="/header-bg-color.png" alt="" className="w-full" />
            </div>

            <nav ref={navRef} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">

                <a href="">
                    <img src="/housnaa.png" alt="Logo" className="w-30 cursor-pointer mr-14" />
                </a>

                <ul ref={navLinkRef} className="hidden md:flex flex-col md:flex-row items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Outfit hover:scale-105">
                    <li>
                        <a className="hover:text-gray-500 transition relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-[#749DD0] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform" href="#">Home</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500 transition relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-[#749DD0] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform" href="#about">About me</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500 transition relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-[#749DD0] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform" href="#education">Education</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500 transition relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-[#749DD0] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform" href="#experience">Experience</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500 transition relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-[#749DD0] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform" href="#work">My Work</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500 transition relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-[#749DD0] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform" href="#contact">Contact me</a>
                    </li>
                </ul>

                <div className="flex items-center gap-4">

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <img src="/menu-black.png" alt="" className="w-6" />
                    </button>

                </div>

                <ul ref={sideMenuRef} className="font-Outfit flex md:hidden flex-col gap-4 py-20 px-10 fixed right-[-16rem] top-0 w-64 z-50 max-h-[90vh] overflow-y-auto bg-[#d3e3f7] transition-all duration-500">

                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <img src="/close-black.png" alt="" className="w-5 cursor-pointer" />
                    </div>

                    <li><a href="#top" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About me</a></li>
                    <li><a href="#education" onClick={closeMenu}>Education</a></li>
                    <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                    <li><a href="#work" onClick={closeMenu}>My Work</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>
                </ul>

            </nav>
        </>
    )
}
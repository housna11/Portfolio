export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <img src="/DSC_93751 (1).jpg" alt="" className="rounded-full w-32" />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                <span className="text-[#749DD0]">Hi!</span> I&apos;m Housna Fathi
                <img src="" alt="" className="w-6 mb-1" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">Developpeuse Web Full-Stack</h1>
            {/* <p className="max-w-2xl mx-auto font-Ovo"></p> */}

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact"
                    className="bg-gradient-to-r from-[#749DD0] to-[#DA7D20] hidden lg:flex items-center gap-4 px-10 py-4 border border-gray-300 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full ml-4 mt-1 font-Ovo dark:border-white/30 text-xl text-white">
                    contact me <img src="/right-arrow-bold.png" alt="" className="w-4 text-white" />
                </a>

                <a href="./assets/dev-icon.png" download
                    className="hidden lg:flex items-center gap-4 px-10 py-4 border border-gray-300 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full ml-4 mt-1 font-Ovo dark:border-white/30 text-xl">
                    my resume <img src="/download-icon.png" alt="" className="w-4 dark:invert" />
                </a>
            </div>
        </div>
    )
}
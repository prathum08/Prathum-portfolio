export const Navbar = () =>{

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        prathum<span className="
                        text-yellow-500">.</span><span className="text-blue-500 ">bhangadia</span>
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
                        &#9776
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home">Home    </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
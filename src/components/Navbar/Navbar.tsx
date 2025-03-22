export default function Navbar() {

    return (
        <nav className="bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col items-center space-y-4">
               
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
                            Filmes & Series
                        </h1>
                    </div>

                 
                    <div className="flex justify-center w-full">
                        <div className="flex items-center space-x-4">
                            <a
                                href="/"
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Home
                            </a>
                            <a
                                href="/filmes"
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Filmes
                            </a>
                            <a
                                href="/series"
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Séries
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

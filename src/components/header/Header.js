

function Header() {
  return (
      <header className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <svg className="w-10 h-10 text-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">PRINT HUB</h1>
                </div>
                <a href="#contact" className="hidden md:inline-block bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-orange-700 transition duration-300">Contact Us</a>
            </div>
    </header>
  );
}

export default Header;

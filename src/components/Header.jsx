function Header() {
    return <div className="p-3 bg-black flex items-center justify-between">
        <div className="flex items-center space-x-4">
            <h1 className="text-[40px] uppercase font-bold text-red-700">
                Movie
            </h1>
            <nav className="flex items-center space-x-4">
                <a href="/" className="text-white hover:text-red-700">Home</a>
                <a href="/movies" className="text-white hover:text-red-700">About</a>
                <a href="/tv-shows" className="text-white hover:text-red-700">Contact</a>
            </nav>
        </div>
        <div className="flex items-center space-x-4">
            <input type="text" placeholder="Search..." className="p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-700" />
            <button className="p-2 bg-red-700 text-white rounded-md hover:bg-red-600" >Search</button>
        </div>
    </div>
}
export default Header;
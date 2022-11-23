import {Link} from 'react-router-dom'
const Navbar = () => {
    return(
        <div>
            <nav className="flex items-center font-bold text-lg bg-slate-400 w-400 h-12">
                <div className="container">
                    <ul className="flex justify-around">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/find-the-service">Find The Service</Link></li>
                        <li><Link to="/disability-info">Disability info</Link></li>
                        <li><Link to="/essential-docs">Essential Docs</Link></li>
                        <li><Link to="/resources">Resources</Link></li>
                        <li>
                            <div class="flex items-center justify-center w-45 h-8 bg-white">
                                <form method="GET">
                                    <div class="relative text-black-600 focus-within:text-black-400">
                                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </button>
                                    </span>
                                    <input type="search" name="q" class="py-2 text-sm text-black bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-black" placeholder="Search for schemes/services" autocomplete="off" />
                                    </div>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}
export default Navbar
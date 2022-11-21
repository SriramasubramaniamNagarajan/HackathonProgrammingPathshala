import {Link} from 'react-router-dom'
const Navbar = () => {
    return(
        <div>
            <nav className="flex items-center font-semibold bg-slate-400 w-400 h-10">
                <div className="container">
                    <ul className="flex justify-between">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/find-the-service">Find The Service</Link></li>
                        <li><Link to="/disability-info">Disability info</Link></li>
                        <li><Link to="/essential-docs">Essential Docs</Link></li>
                        <li><Link to="/resources">Resources</Link></li>
                        <li><input type="text" placeholder="Search for schemes/services"/></li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}
export default Navbar
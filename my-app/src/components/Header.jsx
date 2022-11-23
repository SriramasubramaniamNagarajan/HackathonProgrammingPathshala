import DCPCRLogo from '../Asserts/logo text.png'
import ChildRights from '../Asserts/DCPCR logo.jpg'
const Header = () => {
    return(
        <div>
            <div className="flex items-center bg-[#d1d5db] w-200 h-10">
                <div className="container flex justify-end">
                    <span className="px- py-4">Screen Reader Access</span>
                    <span className="px-2 py-4">|</span>
                    <span className="px-2 py-4">tT +A A -A</span>
                    <span className="px-2 py-4">|</span>
                    <span className="px-2 py-4">English</span>
                </div>
            </div>
            
            <div className='flex items-center justify-between'>
                <div className='h-13 w-13 rounded text-black'>
                    <img src={DCPCRLogo} alt="DCPCR Logo" />
                </div>
                <div className='h-13 w-13 rounded text-black'>
                    <img src={ChildRights} alt="Child Rights" />
                </div>
            </div>

        </div>
    )
}
export default Header;
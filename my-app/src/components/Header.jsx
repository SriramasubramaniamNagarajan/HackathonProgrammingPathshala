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
            
            <div className='flex items-center w-100 h-20'>
                <div className='container flex justify-between'>
                    <button className='w-25 px-5 py-1 bg-[#474646] rounded text-white flex'>DCPCR</button>
                    <button className='w-25 px-5 py-1 bg-[#474646] rounded text-white'>Child Rights</button>
                </div>
            </div>

        </div>
    )
}
export default Header;
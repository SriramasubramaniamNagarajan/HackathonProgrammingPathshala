import RightAndEntitlement from './RightAndEntitlement'
const Home = () =>{
    return(
        <div className="flex flex-col justify-center max-w-5xl">
            
            <div>
                <h1 className="text-5xl text-center font-black ">Child Rights</h1> 
            </div>
            
            <br/>

            <div>
                <p className="text-center text-xl font-semibold">
                    The Delhi Commission for Protection of Child Rights has attempted to create extensive repository of all existing entitlements and relavant information which could be benefit to Persons with Disabilities & their caregivers in Delhi. This website aims to address the information asymmetry by creating awarness about the rights of Persons with Disabilities, especially Children with special needs or Children who have parents with disabilities & assist them in understanding the means of leveraging rightful entitlements for their own benefit.
                </p>
            </div>
            
            <br/>

            <div className="flex justify-center">
                <h3 className="font-medium flex justify-center">click to know your right & entitlement</h3>
            </div>
            
            <div className="flex justify-center">
            <a href="/RightAndEntitlement">
                <button className='w-25 px-5 py-1 bg-[#474646] font-semibold rounded text-white'>Get Started</button>
                </a>
            </div>

        </div>
    )
}

export default Home
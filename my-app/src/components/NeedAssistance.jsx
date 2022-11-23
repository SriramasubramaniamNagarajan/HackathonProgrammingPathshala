import messagebubble from '../Asserts/messagebubble.png'
const NeedAssistance = () => {
    return(
        <div className="flex justify-items-end absolute bottom-0 right-5">
            <div class="p-6 max-w-lg mx-auto  bg-black text-white rounded-xl shadow-lg flex items-center space-x-4">
                <div class="shrink-0">
                    <img class="h-12 w-12" src={messagebubble} alt="ChitChat Logo"/>
                </div> 
                <div>
                    <div class="text-xl font-medium">Need Assistance?
                    </div>                
                </div>
            </div>
        </div>
    )
}

export default NeedAssistance
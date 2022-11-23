import {resourceList} from '../Asserts/data.jsx'

const Resources = () => {
    return(
        <div>
            <div>
                <p className="text-lg font-black gap-5">Important Resources</p>
            </div>
            <br/>
            <div>
                <ul class="list-decimal list-inside gap-2">
                    {resourceList.map( resource => {
                        return(
                            <li key={resource.key}>{resource.description}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Resources
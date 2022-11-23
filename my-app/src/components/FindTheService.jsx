import React from 'react';
import Select from 'react-select'
import {DisabilityHandbook} from '../Asserts/data.jsx'

const AnnualIncome = [
    {
        value : '',
        label : ''
    },
    {
        value : 30000,
        label : '0-30000'
    },
    {
        value : 60000,
        label : '30000-60000'
    },
    {
        value : 100000,
        label : '60000-100000'
    },
    {
        value : 250000,
        label : '100000-250000'
    },
    {
        value : 500000,
        label : '250000-500000'
    }
]


const Disability = [
    {
        value : '',
        label : ''
    },
    {
        value : 'Visual impairment',
        label : 'Visual impairment'
    },
    {
        value : 'Hearing impairment',
        label : 'Hearing impairment'
    },
    {
        value : 'Loco motor impairment; Cerebral Palsy',
        label : 'Loco motor impairment; Cerebral Palsy'
    },
    {
        value : 'Mental retardation and Mental illness',
        label : 'Mental retardation and Mental illness'
    },
    {
        value : 'Children with learning disabilities',
        label : 'Children with learning disabilities'
    }
]

class FindTheService extends React.Component{
    
    render(){
        return(        
            <div className="p-6 max-w-xl mx-auto  bg-white text-black rounded-xl shadow-lg flex items-center space-x-4">
                <br/>
                <form> 
                    <div className='bg-slate-400'>
                    <span class="text-sm">
                        Let us help you find relavant scheme and services for you!
                    </span>
                    </div>
                    <br/>
                    <div>
                    <label class="block">
                    <span class="block text-sm font-medium text-slate-700">Date of Birth</span>
                    <input type="Date" placeholder="DD/MM/YYYY" class="mt-1 block w-100 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                    </label>
                    </div>
                    <br/>
                    <div>
                    <label class="block">
                    <span class="block text-sm font-medium text-slate-700">
                        Annual Family Income (optional)
                        </span>
                    </label>
                    
                    <Select value={AnnualIncome.value} 
                        options={AnnualIncome} 
                        defaultValue={AnnualIncome[0]} 
                        />
                    
                    </div>
                    <br/>
                    <div>
                    <label class="block">
                    <span class="block text-sm font-medium text-slate-700">
                        Any Specific category of scheme and services, you are intrested in? (optional)
                        </span>
                    </label>
                    <Select value={DisabilityHandbook.map(handbook =>
                    {return(handbook.Category)})} 
                        options={DisabilityHandbook.map(handbook =>
                            {return(handbook.Category)})} 
                        defaultValue={DisabilityHandbook.map(handbook =>
                            {return(handbook.Category)})[0]} 
                    />
                    </div>
                    <br/>
                    <div>
                    <label class="block">
                    <span class="block text-sm font-medium text-slate-700">
                        Type of Disability ?
                        </span>
                    </label>
                    <Select value={Disability.value} 
                        options={Disability} 
                        defaultValue={Disability[0]} 
                    />
                    </div>
                    <br/>
                    <div>
                    <label class="block">
                    <span class="block text-sm font-medium text-slate-700">
                        Disability Percentage % (Optional)
                    </span>
                    <input type="number" placeholder="" class="mt-1 block w-100 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
                    </label>
                    </div>
                    <br/>
                    <div className='flex justify-center'>
                        <input type="submit" value="Search" class="bg-black w-300 px-5 py-2 text-sm font-medium text-white" />
                    </div>
                </form>            
            </div>
        )
    }
    
}

export default FindTheService
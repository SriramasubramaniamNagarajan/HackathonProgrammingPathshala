import Select from 'react-select'
const AnnualIncome = [
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

const FindTheService = () => {
    return(
        <div className="flex flex-col items-center rounded">
            <form>
                <span class="text-m">
                    Let us help you find relavant scheme and services for you!
                </span>
                <label class="block">
                <span class="block text-sm font-medium text-slate-700">Date of Birth</span>
                <input type="Date" placeholder="DD/MM/YYYY" class="mt-1 block w-100 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                </label>
                <label class="block">
                <span class="block text-sm font-medium text-slate-700">
                    Annual Family Income (optional)
                    </span>
                </label>
                <div class="mt-1 block w-100 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
                    <select value={AnnualIncome.value} options={AnnualIncome} defaultValue={AnnualIncome[1]} 
                />
                </div>

            </form>
        </div>
    )
}

export default FindTheService
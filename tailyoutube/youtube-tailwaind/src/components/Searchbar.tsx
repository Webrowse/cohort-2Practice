

export const Searchbar = () => {
    // export function Searchbar() {
    return <div>
<div className="w-96 flex text-gray-900 border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2">

        <input
            type="search"
            id="default-search"
            className="w-full bg-slate-950 text-white border-none outline-none"
            placeholder="Search..."
            required
            />
        <button className="bg-slate-950 text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 19l-4-4m0-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                    />
            </svg>
        </button>

                    </div>
    </div>


}
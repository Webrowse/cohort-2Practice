
import { Searchbar } from "./Searchbar"
export const Appbar = () => {
    return <div className="flex justify-between">
        <div className="text-md inline-flex items-center pb-1 p-3">
            Youtube logo
        </div>
        <div>
            <Searchbar />
        </div>
        <div>
            Sign In
        </div>
    </div>
}
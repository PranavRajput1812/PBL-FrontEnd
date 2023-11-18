
import { useNavigate } from "react-router-dom";
function CompanyCard({data}){
    const navigate = useNavigate(); 
    return(
        <>
             <div
            onClick={() => navigate("/company/description", { state: {...data}})}
            className="text-white w-[22rem] h-[430px] shadow-lg rounded-lg cursor-pointer group overflow-hidden bg-zinc-700"
        >
                <div className="overflow-hidden">
                <div className="p-3 space-y-1 text-white">
                    <h2 className="text-cl font-bold text-yellow-500 line-clamp-2">
                        {data?.title}
                    </h2>
                    <p className="line-clamp-2">
                        {data?.description}
                    </p>
                    <p className="font-semibold">
                        jobRole:<span className="font-bold text-yellow-500"> {data?.jobRole}</span>
                    </p>
                </div>
            </div>   
            </div>
        </>
    )
}


export default CompanyCard
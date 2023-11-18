import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import CompanyCard from "../../components/CompanyCard";
import HomeLayout from "../../Layouts/HomeLayout";
import { getAllCompanies } from "../../Redux/Slice/ComapnySlice";

function CompanyList(){
    const dispatch = useDispatch();

    const {companyData} = useSelector((state)=>state.company);

    async function loadCompany(){
        await dispatch(getAllCompanies)
    }
    useEffect(()=>{
        loadCompany();
    },[])
    return(
        <>
          <HomeLayout>
            <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white">
                <h1 className="text-center text-4xl font-semibold mb-5">
                    Explore company made by { " " } 
                    <span className="font-bold text-yellow-500">Industry experts</span>
                </h1>
                <div className="mb-10 flex flex-wrap gap-14">
                    {companyData?.map((element)=>{
                        return <CompanyCard key={element._id}data={element}/>
                    })}
                </div>
            </div>
            
        </HomeLayout>
        </>
    )
}
export default CompanyList
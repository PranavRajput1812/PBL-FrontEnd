import { Link } from "react-router-dom"

import HomePageImage from '../assets/Images/logo-wide.png'
import HomeLayout from "../Layouts/HomeLayout"
function HomePage(){
    return(
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh] ">
                <div className='w-1/2 space-y-6'>
                        <h1 className='text-5xl font-semibold '>
                            Find Out Your 
                            <span className='text-yellow-500 font-bold'>
                                 Placement
                                
                             </span>
                        </h1>
                        <p className='text-xl text-gray-200'>
                        The Placement Cell operates round the year to facilitate contacts between companies and graduates. We have been successful in maintaining our high placement statistics over the years and the fact that our students have achieved record breaking placements itself is a testimony to our quality. 
                        </p>

                        <div className="space-x-6">
                            <Link to="/company">
                                <button className='bg-yellow-500 px-5 py-3 rounded-md text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300 font-semibold'>
                                Explore Companies
                                </button>
                              
                            </Link>
                            <Link to="/contact">
                                <button className=' border border-yellow-500  px-5 py-3 rounded-md text-lg
                                font-semibold  cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300'>
                                        Contact Us
                                </button>
                              
                            </Link>
                        </div>
                </div>

                <div className='w-1/4 flex items-center justify-center '>
                    <img src={HomePageImage} alt="homepage image" />
                </div>
            </div>
        </HomeLayout>
    )
}

export default HomePage
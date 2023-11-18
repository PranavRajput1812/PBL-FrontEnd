
import aboutMainPage from '../assets/Images/amit-sarkar-training-placement-head.jpg'
import HomeLayout from "../Layouts/HomeLayout";
function AboutUs(){
    return(
        <>
            <HomeLayout>
                <div className="flex flex-col  text-white pl-20  pt-10 ml-20 ">
                    <div className="flex items-center gap-5 mx-10">
                        <section className="w-full space-y-10">
                           <h1 className="text-5xl text-yellow-500 font-semibold ">
                           DEPARTMENT OF TRAINING AND PLACEMENT
                            </h1>     
                            <p className="text-xl text-gray-200">
                            Kolhapur Institute of Technology, (Autonomous), Kolhapur has always been a step ahead when it comes to placements. Our students are prepared for the opportunities that await them in the professional arena. The Placement Cell operates round the year to facilitate contacts between companies and graduates. The Placement details of our students are an indicative factor that the college is having very fruitful and meaningful relations with the industries. We have been successful in maintaining our high placement statistics over the years and the fact that our students have achieved record breaking placements itself is a testimony to our quality.


                            </p>
                        </section>
                        <div className="w-1/2 mt-40">
                        <img 
                            src={aboutMainPage}
                            className='drop-shadow-2xl w-[50%] h-[50%] rounded-md'
                            alt="about main page"
                        />
                        <h3 className='ml-4'>
                        Dr Amit R Sarkar
                        <br/>
                    Dean, Corporate Realtions
                   <br />
                           Head ,T & P
                           <br />
                        Mob – 9022789093
                        <br />
                    Email - tpo@kitcoek.in</h3>
                    </div>
                    </div>

                    
                </div>
            </HomeLayout>
        </>
    )
}
export default AboutUs;
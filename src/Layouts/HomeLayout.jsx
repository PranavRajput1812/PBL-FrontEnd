import {AiFillCloseCircle} from 'react-icons/ai'
import {FiMenu} from 'react-icons/fi'
import {useDispatch,useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'

import Footer from '../components/Footer';
import { logout } from '../Redux/Slice/authSlice'
function HomeLayout({children }){

    const dispatch = useDispatch();
    const navigate= useNavigate();

    //for changing if user is logged in
    const isLoggedIn = useSelector((state)=>state?.auth?.isLoggedIn);

    //for displaying the options acc to role
    const role = useSelector((state)=>state?.auth?.isLoggedIn)
    function changeWidth(){
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';

    }

    function hideDrawer(){
        const element = document.getElementsByClassName("drawer-toggle")
        element[0].checked = false;

        changeWidth();
    }
    async function handleLogout(e) {
        e.preventDefault();

        const response = await dispatch(logout());
        if(response?.payload?.data)
            navigate("/");
    }

    return(
        <div className='min-h-[90vh]'>
            <div className='drawer absolute left-0 z-50 w-full'>
                <input className="drawer-toggle" id="my-drawer" type="checkbox"/>
                <div className='drawer-content'>
                    <label htmlFor="my-drawer" className='cursor-pointer relative'>
                       <FiMenu 
                       onClick={changeWidth}
                        size={"32px"}
                        className='font-bold text-white m-4'
                       />
                    </label>
                </div>
                <div className="drawer-side w-0" >
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-base-content relative ">
                        {/* Sidebar content here */}
                           <li className='w-fit absolute right-2 z-50'>
                            
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24}/>
                            </button>
                            </li>
                           <li>
                                <Link to="/">Home</Link>
                           </li>
                           {isLoggedIn && role==='ADMIN' &&(
                            <li>
                                <Link to="/admin/dashboard">Admin DashBoard</Link>
                            </li>
                           )}
                           <li>
                                <Link to="/company">All Company</Link>
                           </li>
                           <li>
                                <Link to="/contact">Contact Us</Link>
                           </li>
                           <li>
                                <Link to="/about">About Us</Link>
                           </li>
                           {!isLoggedIn ? (
                             <li className="w-[40%]">
                             <div className="">
                                 <button className="btn btn-primary ">
                                     <Link to="/login">Login</Link>
                                 </button>
                                 <button className=" btn btn-secondary">
                                     <Link to="/signup">Signup</Link>
                                 </button>
                             </div>
                         </li>
                           ):
                            (
                             <li className="w-[40%]">
                             <div className="">
                                 <button className="btn btn-primary ">
                                     <Link to="/user/profile">Profile</Link>
                                 </button>
                                 <button className=" btn btn-secondary">
                                     <Link onClick={handleLogout}>LogOut</Link>
                                 </button>
                             </div>
                         </li>
                           )}

                    </ul>
                </div>
            </div>
            {children}
            <Footer/>
        </div>
    )
}
export default HomeLayout
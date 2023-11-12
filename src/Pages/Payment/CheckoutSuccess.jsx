import { AiFillCheckCircle } from "react-icons/ai";
import HomeLayout from "../../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserData } from "../../Redux/Slices/AuthSlice";

function CheckoutSuccess() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserData());
    },[]);
    return (
        <HomeLayout >
            <div className="min-h-[90vh] flex items-center justify-center text-white">
                <div className="w-80 h-[26rem] flex flex-col justify-center items-center shadow-[0_0_10px_black] rounded-lg relative">
                    <h2 className="bg-green-500 absolute top-0 w-full py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg text-center">
                        Payment Successfull
                    </h2>
                    <div className="px-4 flex flex-col items-center justify-center space-y-2">
                        <div className="text-center space-t-2">
                            <h3 className="text-lg font-semibold">
                                Welcome to the Pro Bundle
                            </h3>
                            <p className="text-left">
                                Now you can enjoy all the courses.
                            </p>
                        </div>
                        <AiFillCheckCircle className="text-green-500 text-5xl" />
                    </div>
                    <Link to="/" className='bg-green-500 font-bold text-xl w-full text-center py-3 rounded-bl-lg rounded-br-lg hover:bg-green-600 transition-all ease-in-out duration-300 absolute bottom-0 ' >
                        <button>
                            Go to dashboard
                        </button>
                    </Link>
                </div>
            </div>
        </HomeLayout>
    )
}

export default CheckoutSuccess;
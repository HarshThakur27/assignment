import React from "react";

function Navbar(){
    return(
        <div className=" max-w-[100vw]  flex h-11 w-full justify-between lg:justify-center   bg-slate-700">
            <div className="flex ml-1">
            <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/21/37/80/21378044-33cf-3522-b820-0dfe5a9b701d/source/512x512bb.jpg"
            className="max-w-[4vw] md:ml-1  h-8 pt-2 bg-slate-700 "></img>
            <h1 className=" text-white  text-2xl font-semibold pt-1 ">Firstbench</h1>
            </div>
            <div className=" hidden   md:flex md:gap-2 md:ml-5 lg:gap-7 lg:ml-12">
            <div className="flex gap-1">
            <img src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png" className="max-w-[2vw]  h-4 mt-3"></img>
            <p className="pt-3 md:text-xs  text-gray-400 font-semibold text-sm">Dashboard</p>
            </div>
            <div className="flex gap-1">
                <img src="https://cdn-icons-png.flaticon.com/128/599/599887.png" className="max-w-[2vw] h-4 mt-3"></img>
                <p className="pt-3 md:text-xs text-gray-400 font-semibold text-sm">FirstGuru</p>
            </div>
            <div className="flex gap-1">
                <img src="https://cdn-icons-png.flaticon.com/128/13701/13701194.png" className="max-w-[2vw]  h-4 mt-3 "></img>
                <p className="pt-3 md:text-xs text-gray-400 font-semibold text-sm">TownHall</p>
            </div>
            <div className="flex ">
                <img src="https://cdn-icons-png.flaticon.com/128/2902/2902298.png" className="max-w-[2vw]  h-4 mt-3 "></img>
                <p className="pt-3 md:text-xs text-gray-400 font-semibold text-sm">AI Evaluation</p>
            </div>
            <div  className="flex gap-1">
                <img src="https://cdn-icons-png.flaticon.com/128/4221/4221516.png" className="max-w-[2vw]  h-4 mt-3 bg-grey-600 "></img>
                <p className="pt-3 md:text-xs text-gray-400 font-semibold text-sm">Performance</p>
            </div>
           <div  className="flex gap-1">
            <img src="https://cdn-icons-png.flaticon.com/128/2916/2916315.png" className="max-w-[2vw] h-4 mt-3 bg-green-700 "></img>
            <p className="pt-3 md:text-xs text-green-600 font-semibold text-sm">Mock Test</p>
           </div>
            
            <img src="https://cdn-icons-png.flaticon.com/128/3602/3602145.png"
            className="max-w-[2vw] md:ml-2 h-8 pt-3 ml-5 border-white"></img>
            </div>

            <div className="flex max-w[6vw] h-8 mt-2 p-1 md:ml-3 ml-5 rounded-lg  bg-gray-800">
                <img src="https://tse2.mm.bing.net/th?id=OIP.yvBGD8Gy_PLRhAJ7cOsWOwHaHa&pid=Api&P=0&h=220"
                className="max-w-[3vw] min-w-[2vw] sm:w-[1vw],h-3 h-7 pb-1 rounded-lg"></img>
                {/* <p className=" font-medium text-base pl-1 pr-1 text-white">Profile</p> */}
                <select className="bg-gray-800 ml-1 rounded-lg text-white text-sm border-collapse"><option className="">Profile</option></select>
            </div>
        </div>
    )
}

export default Navbar;
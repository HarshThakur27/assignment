import React from "react";

function Result(){
    return(
        
        <div className="lg:max-w-[25vw] lg:block hidden transition-all duration-300 ease-in-out rounded-md h-full mt-4 ml-2 w-full bg-purple-100 ">
            <div>
                <img src="https://webstockreview.net/images/clipart-writing-written-test-2.png"
                className="max-w-[10vw] ml-24"></img>
                <h1 className="font-bold text-blue-700 text-xl">Your Result !</h1>
                <p className="text-sm  font-thin">All your insights & details in one place</p>
            </div>


            <div className="bg-white rounded-md p-5 m-5 ">
                <div className=" rounded-md flex bg-purple-100">
                    <div className="bg-purple-400 p-2 m-2 rounded-md">
                        <img src="https://cdn-icons-png.freepik.com/256/6337/6337841.png?semt=ais_hybrid"
                        className="max-w-[2vw]"></img>
                    </div>
                    <div>
                       <div className="rounded-3xl  bg-purple-900 m-1 ">
                       <p className="text-[10px] text-white m-1 ">YOU'VE PASSED</p>
                       </div>
                        <div className="flex ml-1">
                        <p className="text-2xl font-bold">136 </p>
                        <p className="text-xs mt-3">/240</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-gray-300 mt-3 mb-3 ml-3"></div>
                    <div>
                        <p className="text-sm bg-green-600 mr-4 ml-4 mt-1 p-1 rounded-md text-white">76%</p>
                        <p className="text-[11px] font-medium mt-1 text-green-600 ">ACCURACY</p>
                    </div>
                </div>

                <div className="mt-5  rounded-md">
                    <div className="bg-purple-100 rounded-md p-1">
                      <div className="flex">
                      <img src="https://tse1.mm.bing.net/th?id=OIP.-KBkFL2WWDplHMgnEDcLPQHaE8&pid=Api&P=0&h=220"
                      className="max-w-[3vw] p-1 h-12 "></img>
                      <div className=" ml-1">
                        <p className="text-xs text-blue-700 font-semibold ">Top Score</p>
                        <div className="flex ml-1">
                        <p className="text-2xl font-bold">230 </p>
                        <p className="text-xs mt-3">/240</p>
                        </div>
                      </div>
                      </div>

                      <div className="border-[1px] border-gray-300 mt-1"></div>

                      <div className="flex  ">
                        <p className="text-[10px] mt-1 font-semibold text-gray-500 ml-2">By</p> <p className="font-bold mt-1 text-black text-[11px] ml-1">Parth Akotkar</p>
                        <p className="text-[10px] bg-green-500 text-white rounded-2xl mt-1 p-1 ml-16 ">  92% Accuracy  </p>
                      </div>
                     
                    </div>
                    
                      <div className="mt-2">
                        <h3 className="text-black font-semibold  mr-20">Improve Your marks</h3>
                        <p className="text-[10px] text-gray-500 mr-14">Improve you score by practicing more.</p>
                        <button className="bg-blue-500 text-white font-semibold w-full rounded-lg p-1 mt-2">Practice more</button>
                      </div>
                </div>
            </div>

            <div className="bg-white rounded-md  m-5 ">
                <h2 className="text-lg font-bold mr-36 pt-3 pl-3 ">Revisit Paper</h2>
                <p className="text-sm text-gray-500 mt-2 mr-12 ml-1">Challenge your frineds by simply<br></br> sharing a link to this test</p>
                <button className="flex max-w-[10vw] ml-16 mt-4 text-white pl-8 rounded-md w-full bg-blue-600"><img src="https://cdn-icons-png.freepik.com/256/9278/9278925.png?ga=GA1.1.923399354.1736501787&semt=ais_hybrid"
                className="max-w-[2vw] p-1"></img>Visit</button>

                <p className="text-[10px] mt-4 pb-3 text-gray-700">Instruction for how to upload your handwritten<br></br>material in given</p>
            </div>
        </div>
    )
}

export default Result;
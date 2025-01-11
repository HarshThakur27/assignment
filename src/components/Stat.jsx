import React from "react";
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar,} from 'react-chartjs-2';


function Stat (){
    return(
        <div className="lg:max-w-[75w] max-w[100vw] w-full ml-3  mt-4 mr-5">
        
            <div className="w-full justify-evenly flex ">
                <div className=" lg:max-w-[20vw] max-w-[30vw] w-full h-64 mt-2 border-[1px] border-gray-300 shadow-xl  rounded-md ">
                <p className="flex p-2 gap-1 text-sm"><img src="https://cdn-icons-png.flaticon.com/128/18586/18586145.png"
                    className="max-w-[1vw]"></img>Compare Accuracy</p>
                </div>
                <div className=" lg:max-w-[20vw] max-w-[30vw] w-full h-64 m-2 border-[1px] border-gray-300  shadow-xl  rounded-md">
                <p className="flex p-2 gap-1 text-sm"><img src="https://cdn-icons-png.flaticon.com/128/18586/18586145.png"
                    className="max-w-[1vw]"></img>Compare Accuracy</p>
                </div>
                <div className=" lg:max-w-[20vw] max-w-[30vw] w-full h-64 m-2 border-[1px] border-gray-300  shadow-xl  rounded-md">
                    <p className="flex p-2 gap-1 text-sm"><img src="https://cdn-icons-png.flaticon.com/128/18586/18586145.png"
                    className="max-w-[1vw]"></img>Compare Accuracy</p>
                </div>
            </div>

             {/*2nd div , of improvemnts,response time , suggestion*/}
             <div className="lg:flex ml-2 ">
             {/**improvemnts and response section */}
                <div className="lg:max-w-[75vw]  mt-4 lg:flex gap-2">
                    <div className="lg:max-w-[17vw] max-w-[70vw]  lg:h-48 w-full shadow-lg border-gray-200 border-[0.5px] rounded-md  ml-5">
                        <p className="text-sm text-left flex ml-2 gap-1 mt-2 text-gray-600"><img src="https://cdn-icons-png.flaticon.com/128/18478/18478890.png"
                        className="max-w-[1vw] mt-1 "></img>Improvements</p>
                        <p className="mt-4 font-semibold text-sm text-left ml-3">Subject Understanding</p>
                        <div className=" text-left m-2 mt-2 flex flex-wrap text-sm">
                        <p  className="bg-blue-500 rounded-lg m-1 pl-1 pr-1 text-[11px] font-semibold"style={{ display: "inline", marginRight: "10px" }}>Geography</p>
                        <p className="bg-amber-500 rounded-lg m-1 pl-1 pr-1 text-[11px] font-semibold" style={{ display: "inline", marginRight: "10px" }}>Politics</p>
                       <p className="bg-red-500 rounded-lg m-1 pl-1 pr-1 text-[11px] font-semibold" style={{ display: "inline" }}>Current Affairs</p>
                        <br />
                        <p className="bg-blue-500 rounded-lg m-1 pl-1 pr-1 text-[11px] font-semibold" style={{ display: "inline", marginRight: "10px" }}>General Studies</p>
                        <p className="bg-red-500 rounded-lg m-1 pl-1 pr-1 text-[11px] font-semibold" style={{ display: "inline", marginRight: "10px" }}>Mathematics</p>
                       <p className="bg-amber-500 rounded-lg m-1 pl-1 pr-1 text-[11px] font-semibold" style={{ display: "inline", marginRight: "10px" }}>History</p>
                       <p className="bg-blue-500 rounded-lg m-1 pl-1 pr-1 text-[11px] font-semibold" style={{ display: "inline", marginRight: "10px" }}>Economics</p>
                      <br />
                      <p className="bg-red-500 rounded-lg m-1 pl-1 pr-1 text-[11px] font-semibold" style={{ display: "inline", marginRight: "10px" }}>Social studies</p>


                        </div>
                    </div>
                    {/**response time */}
                    <div className="lg:max-w-[17vw]  max-w-[70vw]  w-full shadow-lg border-gray-200 border-[0.5px] rounded-md">
                        <p className="text-sm flex m-1 gap-1 text-gray-500 m-2"><img src="https://cdn-icons-png.flaticon.com/128/992/992700.png"
                         className="max-w-[1vw] mt-1 "></img>Response Time</p>
                        <p className="bg-blue-500 text-sm mt-6 mr-24  ml-2 rounded-md text-center text-white">Std Time - 2min</p>
                        
                        <div className="flex bg-purple-100 rounded-md m-3 p-2 border-dotted border-black border-2">
                            <p className=" text-xl text-green-700 font-semibold ">60</p>
                            <p className="text-sm mt-1 text-gray-500 font-semibold">% Ans took</p>
                            <img src="https://cdn-icons-png.flaticon.com/128/2267/2267904.png"
                            className="max-w-[2vw] h-5 mt-1 ml-3 "></img>
                            <p className="text-blue-600  font-semibold text-lg"> 2min</p>
                        </div>
                        <div className="m-2 border-[1px] border-gray-600 ml-3 mr-3"></div>
                        <p className="text-lg font-semibold">You are slow !</p>
                    </div>
                </div>
                {/**approct and suggestion section */}

                <div className="lg:flex gap-2 ml-4 mt-2 lg:max-w-[30vw] w-full">
                    <div className="lg:max-w-[15vw]  max-w-[70vw] h-48 mt-2 w-full rounded-md shadow-lg border-gray-200 border-[0.5px] ">
                    <p className="text-sm text-left flex ml-2 gap-1 mt-1 text-gray-600"><img src="https://cdn-icons-png.flaticon.com/128/18478/18478890.png"
                        className="max-w-[1vw] mt-1 "></img>Approach Data</p>
                        <div className="border-[1px] border-gray-300 flex gap-1 rounded-sm  mr-5 ml-3 mt-1  p-1">
                            <p className="bg-blue-200 p-1 text-blue-700 text-sm font-medium ">25%</p>
                            <p className="font-semibold text-xs mt-1">Based on</p>
                            <p className="font-semibold text-sm text-blue-700">Facts</p>
                        </div>
                        <div className="border-[1px] border-gray-300 flex gap-1 rounded-sm  mr-5 ml-3 mt-1  p-1">
                            <p className="bg-blue-200 p-1 text-blue-700 text-sm font-medium ">32%</p>
                            <p className="font-semibold text-xs mt-1">Based on</p>
                            <p className="font-semibold text-sm text-blue-700">Analysis</p>
                        </div>
                        <div className="border-[1px] border-gray-300 flex gap-1 rounded-sm  mr-5 ml-3 mt-1 p-1">
                            <p className="bg-blue-200 p-1 text-blue-700 text-sm font-medium ">19%</p>
                            <p className="font-semibold text-[9px] mt-1">Based on</p>
                            <p className="font-semibold text-[13px]  text-blue-700">Elimination</p>
                        </div>
                        <div className="border-[1px] border-gray-300 flex gap-1 rounded-sm  mr-5 ml-3 mt-1 p-1">
                            <p className="bg-blue-200 p-1 text-blue-700 text-sm font-medium ">24%</p>
                            <p className="font-semibold text-xs mt-1">Based on</p>
                            <p className="font-semibold text-sm text-blue-700">Guess</p>
                        </div>
                    </div>
                    {/**suggestion */}
                    <div className="lg:max-w-[15vw]  max-w-[70vw] h-48 mt-2 w-full rounded-md shadow-lg border-gray-200 border-[0.5px] ">
                    <p className="text-sm text-left flex ml-2 gap-1 mt-1 text-gray-600"><img src="https://cdn-icons-png.flaticon.com/128/599/599887.png"
                        className="max-w-[1vw] mt-1 "></img>Suggestion</p>
                        <div className="flex gap-2 justify-center ml-1 mt-5">
                            <p className="bg-blue-700 text-[11px] text-white font-semibold m-1 pl-1 pr-1 rounded-sm">Q. 1-12</p>
                            <p className="bg-blue-700 text-[11px] text-white font-semibold m-1 pl-1 pr-1 rounded-sm">Q. 12-32</p>
                            <p className="bg-blue-700 text-[11px] text-white font-semibold  m-1 pl-1 pr-1 rounded-sm">Q. 32-40</p>
                        </div>
                        <div className="flex gap-1 justify-center mt-2 ">
                            <div className="border-[2.5px] lg:max-w-[4vw] p-1 border-dotted border-purple-700 bg-blue-200  flex ml-1 ">
                                <p className="font-semibold text-md">40</p>
                                <p className="font-semibold text-md">sec</p>
                            </div>
                            <div className="border-[2.5px] lg:max-w-[5vw] p-1 border-dotted border-purple-700 bg-blue-200  flex ml-1 ">
                                <p className="font-semibold text-md">1.5</p>
                                <p className="font-semibold text-md">min</p>
                            </div>
                            <div className="border-[2.5px] lg:max-w-[4vw] p-1 border-dotted border-purple-700 bg-blue-200  flex ml-2 ">
                                <p className="font-semibold text-md">3</p>
                                <p className="font-semibold text-md">min</p>
                            </div>
                        </div>

                        <div className="flex justify-center gap-3">
                            <p className="text-md text-green-500 font-semibold ml-2 mt-2">Easy</p>
                            <p className="text-md text-yellow-500 font-semibold ml-2 mt-2">Medium</p>
                            <p className="text-md text-red-500 font-semibold ml-2 mt-2">Hard</p>
                        </div>
                    </div>
                </div>

              
             </div>


               {/**charts */}
               <div className="lg:flex ">
                <div className="lg:max-w-[30vw]  max-w-[70vw] w-full h-60 border-[1px] border-gray-200 shadow-lg mt-3 ml-6 rounded-md">
                <p className="text-sm text-left flex ml-2 gap-1 mt-1 text-gray-600"><img src="https://cdn-icons-png.flaticon.com/128/599/599887.png"
                        className="max-w-[1vw] mt-1 "></img>Compare Accuracy</p>
                    <div className=" p-2 mt-6 ">
                        <Bar
                     data={{
                
                      labels: ["1", "2", "3", "4", "5", "6", "7"],
                      datasets: [
                        {
                          label: "Accuracy",
                          data: [75, 40, 30, 60, 50, 20, 70],
                          backgroundColor: "rgba(75, 192, 192, 0.6)",
                          borderColor: "rgba(75, 192, 192, 1)",
                          borderWidth: 1,
                          barThickness: 10,
                          maxBarThickness: 10,
                       },
                       ],
             
                        }}
                       
                         />
                    </div>
                </div>
                    <div className="lg:max-w-[34vw]  max-w-[70vw] w-full border-[1px] border-gray-200 shadow-lg mt-3 ml-6 mb-3 rounded-md">
                    <p className="text-sm text-left flex ml-2 gap-1 mt-1 text-gray-600"><img src="https://cdn-icons-png.flaticon.com/128/599/599887.png"
                        className="max-w-[1vw] mt-1 "></img>Time Taken</p>
                        <div>
                            <img src="9.png" className="lg:max-w-[44vw] h-24  "></img>
                            <p className="text-[11px] ml-2 mr-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do<br></br> 
                            eiusmod tempor aliqua.</p>

                        </div>
                        <div>
                            <img src="11.png" className="lg:max-w-[32vw] h-24 ml-2 "></img>
                            <p className="text-[11px]  text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do<br></br> 
                            eiusmod tempor aliqua.</p>

                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Stat;
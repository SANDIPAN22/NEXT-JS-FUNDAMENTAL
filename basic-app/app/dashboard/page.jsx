import Card from "@/components/server/Card";
import React from "react";
const fetchData = async () =>{
  const _data = await fetch(process.env.PRODUCTION_HOST+"/api/dashboard")
  const data = await _data.json()
  return data?.data
}
const Dashboard = async() => {
  // fetch data with the help of exposed api
  const data = await fetchData()
  return (<>
  <div className="container">

    <div id="heading" className="text-5xl text-center m-4 font-bold">
      All Users Data
    </div>
    {/* // render data */}
    <div className="data-block flex justify-evenly items-center">
      {data?.map(d => <Card name={d?.name} status={d?.status} eid={d.eid} key={d.eid}/>)}
      
    </div>
  </div>
  
  </>)
};
export const metadata = {
  title: "Dashboard - GET all data",
  description: "Dashboard area for managing your account.",
}
export default Dashboard;

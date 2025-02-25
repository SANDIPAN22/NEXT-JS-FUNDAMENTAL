

const fetchSingleData = async(eid) =>{
  const _raw = await fetch(process.env.PRODUCTION_HOST+"/api/dashboard/"+eid)
  const data = await _raw.json()
  return data?.data
}
const GetSingleData = async ({params}) => {

  
  const {id} = await params
  // console.log(id)
  const data = await fetchSingleData(id)
  console.log(data)
  return (
    <>
  <div className="container flex flex-col items-center">

    <div id="heading" className="text-5xl text-center m-4 font-bold mt-10">
      {data.name}
    </div>
    {/* // render data */}
    <ul className="data-block text-center text-2xl m-2">
      <li>Email Id: {data?.email} </li>
      <li>Employee Id: {data?.eid}  </li>
      <li>Status: {data?.status} </li>
      <li>Team: {data?.team} </li>
      
    </ul>
  </div>
  
  </>
  )
}

export default GetSingleData

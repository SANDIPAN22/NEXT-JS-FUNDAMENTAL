import DeleteForm from '@/components/client/DeleteForm'
import React from 'react'

const Delete = () => {
  
   return (<>
   <div className="container text-center">
 
     <div id="heading" className="text-5xl text-center m-4 font-bold">
       Fill the ID to delete Data
     </div>
     
     {/* // render data */}
     <div className="data-block">
      <DeleteForm/>
     </div>
   </div>
   
   </>)
}

export default Delete
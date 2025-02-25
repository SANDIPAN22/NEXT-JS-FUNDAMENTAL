import UpdateForm from '@/components/client/UpdateForm'
import React from 'react'

const Update = () => {
 
  return (<>
    <div className="container text-center">
  
      <div id="heading" className="text-5xl text-center m-4 font-bold">
        Fill the Form to Update Data
      </div>
      
      {/* // render data */}
      <div className="data-block">
      <UpdateForm/>
      </div>
    </div>
    
    </>)
}

export default Update
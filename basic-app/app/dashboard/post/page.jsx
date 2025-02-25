import CreateForm from '@/components/client/CreateForm'
import React from 'react'

const Post = () => {

   return (<>
    <div className="container text-center">
  
  <div id="heading" className="text-5xl text-center m-4 font-bold">
    Fill the Form to Update Data
  </div>
  
  {/* // render data */}
  <div className="data-block">
  <CreateForm/>
  </div>
</div>
   
   </>)
}

export default Post
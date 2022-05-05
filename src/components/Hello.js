import React from 'react'

const Hello = () =>{
   // return(
       // <div>
           // <h1>Bye everyone</h1>
       // </div>
  //  )
  return React.createElement('div',
  {id: 'hello',class:'dummyClass'},
  React.createElement('hi',null,'Hiiiii')
  )
}

export default Hello
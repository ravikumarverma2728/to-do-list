import React from 'react'

const List = (props) => {
   return (
      <>
       <div className="cross">
            <i class="far fa-times-circle" aria-hidden="true" onClick={()=>{
               props.onselect(props.id);
            }}></i>
            <li>{props.text}</li>
      </div>    
      </>
   )
}

export default List

import React, { useState} from 'react'
import List from './List'
const TO_DO_LIST = () => {
  
    const [input_item,set_input_item] = useState("");
    const [items, setitems] = useState([]);
    const get_item = (event) =>{
        set_input_item(event.target.value);

    };
    const value_change = () =>{
        setitems((oldItems) =>{
            return [...oldItems,input_item]
        });
        set_input_item("");
    };
    const delete_item = (id) =>{
        console.log("deleted");
        setitems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
             return index !== id;
            });
        });
    };

    return (
        <>
         <div className="container-fluid main ">
           <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-7 col-10  border to_do_list ">
                      <h1 id="header">TO-DO-LIST</h1>  
                      <input type="text" name="" value={input_item} placeholder="Add a item" onChange={get_item}/>
                      <i onClick={value_change} class="fas fa-plus-circle"></i>
                      <ol>
                          {items.map((interval,index)=>{
                              return(
                                <List 
                                key={index} 
                                id={index} 
                                onselect={delete_item} 
                                text={interval}/>
                              );
                          })}
                      </ol>
                      
                </div>   
            </div>  
        </div>    
        </>
    );
};

export default TO_DO_LIST;

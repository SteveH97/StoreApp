import React, { useState } from 'react'
import './Filters.css'

const Filters = ({setFilteredProducts, products }) => {

  const [category,setCategory] = useState([{id: "casual", checked: false},{id: "cold", checked: false},{id: "gym", checked: false}]);
  const [material,setMaterial] = useState([{id: "cotton", checked: false},{id: "polyester", checked: false},{id: "cotton-poly", checked: false}]);
  const [size,setSize] = useState([{id: "small", checked: false},{id: "medium", checked: false},{id: "large", checked: false}]);
  const [color,setColor] = useState([{id: "blue", checked: false},{id: "white", checked: false},{id: "yellow", checked: false},{id: "black", checked: false},{id: "red", checked: false},{id: "green", checked: false}]);


  const handleCategory = (e) =>{
    
    const { name } = e.target;

    for(let i = 0; i < category.length; i++){
      if(category[i].id === name){
        let bool = category[i].checked;
        category[i].checked = !bool;
      }
    }
  }

  const handleMaterial = (e) =>{
    
    const { name } = e.target;

    for(let i = 0; i < material.length; i++){
      if(material[i].id === name){
        let bool = material[i].checked;
        material[i].checked = !bool;
      }
    }
  }

  const handleSize = (e) =>{
    
    const { name } = e.target;

    for(let i = 0; i < size.length; i++){
      if(size[i].id === name){
        let bool = size[i].checked;
        size[i].checked = !bool;
      }
    }
  }

  const handleColor = (e) =>{
    
    const { name } = e.target;

    for(let i = 0; i < color.length; i++){
      if(color[i].id === name){
        let bool = color[i].checked;
        color[i].checked = !bool;
      }
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
     
    //Flag to include current array if no boxes checked within this category
    let allUncheckedCat = ((category[0].checked === false) && (category[1].checked === false) && (category[2].checked === false));
    let allUncheckedMat = ((material[0].checked === false) && (material[1].checked === false) && (material[2].checked === false));
    let allUncheckedS = ((size[0].checked === false) && (size[1].checked === false) && (size[2].checked === false));
    let allUncheckedCol = ((color[0].checked === false) && (color[1].checked === false) && (color[2].checked === false) && (color[3].checked === false) &&  (color[4].checked === false) &&  (color[5].checked === false));


    ////////////////////////////////////////////////////////////////////////
    //filter through the category array checkboxes
    const tempArr = products.filter((val)=>{

      for(let i = 0; i < category.length; i++){
        if(allUncheckedCat){
          return val;
        }else if((val.category === category[i].id) && (category[i].checked === true)){
          return val; 
        }
      }
    })


    ////////////////////////////////////////////////////////////////////////
    //filter through the material array checkboxes
    let tempArrTwo = tempArr.filter((val)=>{

      for(let i = 0; i < material.length; i++){
        if(allUncheckedMat){
          return val;
        }else if((val.fabric === material[i].id) && (material[i].checked === true)){
          return val;
        }
      }
    })

    ////////////////////////////////////////////////////////////////////
    //filter through size array
    let tempArrThree = tempArrTwo.filter((val)=>{

      for(let i = 0; i < size.length; i++){
        if(allUncheckedS){
          return val;
        }else if((val.size === size[i].id) && (size[i].checked === true)){
          return val;
        }
      }
    })


    ///////////////////////////////////////////////////////////////////////
    //filter through color array   
    let tempArrFour = tempArrThree.filter((val)=>{

      for(let i = 0; i < color.length; i++){
        if(allUncheckedCol){
          return val;
        }else if((val.color === color[i].id) && (color[i].checked === true)){
          return val;
        }
      }
    })

    if(tempArrFour.length === 0){
      alert("There is no item that meets the required criteria.")
     }else{
      setFilteredProducts(tempArrFour);
     }   


  }

  return (
    <div className='filter'>
      <form onSubmit={handleSubmit}>
        <div className='filter__checkboxes'>
          <div>
            <h3>Category</h3>
            <input type="checkbox" name="casual" onChange={handleCategory}/>
            <label>casual</label><br></br>
            <input type="checkbox" name="cold" onChange={handleCategory}/>
            <label>cold</label><br></br>
            <input type="checkbox" name="gym" onChange={handleCategory}/>
            <label>gym</label><br></br>
          </div>
          <div>
            <h3>Material</h3>
            <input type="checkbox" name="cotton" onChange={handleMaterial}/>
            <label>cotton</label><br></br>
            <input type="checkbox" name="polyester" onChange={handleMaterial}/>
            <label>polyester</label><br></br>
            <input type="checkbox" name="cotton-poly" onChange={handleMaterial}/>
            <label>cotton-poly</label><br></br>
          </div>
          <div>
            <h3>Size</h3>
            <input type="checkbox" name="small" onChange={handleSize}/>
            <label>small</label><br></br>
            <input type="checkbox" name="medium" onChange={handleSize}/>
            <label>medium</label><br></br>
            <input type="checkbox" name="large" onChange={handleSize}/>
            <label>large</label><br></br>
          </div>
          <div>
            <h3>Color</h3>
            <input type="checkbox" name="blue" onChange={handleColor}/>
            <label>blue</label><br></br>
            <input type="checkbox" name="white" onChange={handleColor}/>
            <label>white</label><br></br>
            <input type="checkbox" name="yellow" onChange={handleColor}/>
            <label>yellow</label><br></br>
            <input type="checkbox" name="black" onChange={handleColor}/>
            <label>black</label><br></br>
            <input type="checkbox" name="red" onChange={handleColor}/>
            <label>red</label><br></br>
            <input type="checkbox" name="green" onChange={handleColor}/>
            <label>green</label><br></br>
          </div>
        </div>
        <button type='submit' className='filter__button'>Apply</button>
      </form>
    </div>
  )
}

export default Filters
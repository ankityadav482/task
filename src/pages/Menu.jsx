import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {

   const menu = () =>{
   return [
        {
            id:1,
            name:'Hamburger',
            price:200,
            image:'https://github.com/punitdiwan/codeing-challenge/blob/main/assets/burger.jpeg?raw=true'
        },
        {
            id:2,
            name:'Fries',
            price:100,
            image:'https://github.com/punitdiwan/codeing-challenge/blob/main/assets/fries.jpeg?raw=true'
        },
        {
            id:3,
            name:'Coke',
            price:50,
            image:'https://github.com/punitdiwan/codeing-challenge/blob/main/assets/coke.jpeg?raw=true'
        },
        {
            id:4,
            name:'Pepsi',
            price:50,
            image:'https://github.com/punitdiwan/codeing-challenge/blob/main/assets/pepsi.jpeg?raw=true'
        }
    ]
   }

   const[data,setData]=useState([]);

        const btndata = () => {
        const response = menu(); 
        console.log(response);   
        setData(response);       
    };
    
    const[cart,setCart]=useState([]);
     const addcart = (idx) =>{
        const copycart = [...cart]
        copycart.push(data[idx]);
        setCart(copycart);
    }

    // const[add,setAdd]=useState(0);
     const[add,setAdd]=useState(0);

    //   useEffect(()=>{
    //          btndata()
    //      },[])

    useEffect(()=>{
        btndata()
    },[])


  return (
    <div className='pt-[120px]'>
      {/* <button onClick={()=>{
        btndata()
      }} >Click me</button> */}

      <div className='flex gap-3 pt-1 flex-wrap px-72  '> 
      {
        data.map(function(elem,idx){
            return <div key={idx} className='h-[240px] w-[220px]  shadow-md hover:shadow-lg transition-shadow duration-300  overflow-hidden bg-white rounded-md flex flex-col items-start justify-between ' >
                <img className='h-1/2 w-full object-cover' src={elem.image} alt="" />
                <h3 className='pl-3 '>{elem.name}</h3>
                <h4 className='pl-3 '>Price: {elem.price}</h4>
             <div className="flex gap-2 items-center m-1.5">
                     <button onClick={() => addcart(idx)}
                        className="bg-blue-700 text-white text-xl w-10 h-10 rounded-md cursor-pointer active:scale-90">+</button>

                    <button className="bg-[#D1D8BE] text-[#D1D8BE] text-white text-xl w-10 h-10 rounded-md cursor-pointer active:scale-90">-</button></div>

            </div>

        })
      }

      {
        cart.map(function(elem,idx){
            return <div key={idx} className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[200px] w-[500px] bg-white rounded-md px-3 py-1.5'>
                    <h1 className='mt-2 mb-4 text-2xl'>Order Summary</h1>
                    <div className='flex items-center justify-between'>
                        <h4 className='text-xl text-[#7A7A73] '>{elem.name} :</h4>
                        <h1 className='text-xl '>{add}</h1>
                        <div className='flex gap-1'>
                            <button onClick={()=>{
                                setAdd(add+1)
                            }} className='bg-blue-600 text-white text-3xl px-4 py-1 cursor-pointer rounded-md active:scale-90'>+</button>
                            <button onClick={()=>{
                                if(add> 0)
                                setAdd(add-1);
                            }} className='bg-pink-600 text-white text-3xl px-4 py-1 cursor-pointer rounded-md active:scale-90'>-</button>
                        </div>
                    </div>
                    <h3 className="  text-[#7A7A73]">Total (INR) : <span className=""> {(elem.price * add).toFixed(2)}</span> rs</h3>
                    <div className='absolute left-[46%] bottom-[4%] flex'>
                        <Link className='bg-blue-800 text-white cursor-pointer px-3 py-1.5 rounded-md' to='/checkout'>SAVE AND CHECKOUT</Link>
                        <h3 onClick={()=>{
                            setCart([])
                        }} className=' text-blue-600 bg-white cursor-pointer px-3 py-1.5'>CANCEL</h3>
                    </div>
            </div>
        })
     }


      </div>


    </div>
  )
}

export default Menu

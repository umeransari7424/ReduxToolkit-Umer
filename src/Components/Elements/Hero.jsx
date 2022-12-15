import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add }  from "../../Store/cartSlice"

function Hero() {
    const dispatch = useDispatch();
    const [products,setProducts] = useState([])
    const storeData = async()=>{
        const res = await fetch("https://api.escuelajs.co/api/v1/products")
        const data = await res.json()
        setProducts(data)
    }
    useEffect(()=>{
        storeData();
    },[])

    

    
    const addToCart=(pro)=>{
       console.log("product added to cart")
        dispatch(add(pro))

    }

  return (
    <div className='hero'> 
        <div className="container-fluid py-5">
            <div className="row">
                {
                    products.map(item=>(
                        <div className="col-md-3 mb-3"key={item.id} >
                    <div className="card p-2 shopping-card"  style={{height:"400px"}}>
                        <div className=''>
                            <div className='text-center'>
                                <img src={item.images[0]} className='img-fluid' alt="mobile" style={{width:"220px"}} />
                            </div>
                            <div className='p-3 mt-3'>
                                <div>
                                <h4>Name : {item.title}</h4>
                                <h4>Price : ${item.price}</h4>
                                </div> <br />
                                <div>
                                    <button className='btn btn-success' onClick={()=>addToCart(item)}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
        
    </div>
  )
}

export default Hero
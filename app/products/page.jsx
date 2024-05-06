import React from 'react'
import Image from 'next/image'

export default async function Products() {

  let response= await fetch('https://ecommerce.routemisr.com/api/v1/products')
  let {data} =await response.json()
 
  return (
    <div>
        <div className="container">
        <div className="row">
         {/* <Image src="/images/counters-bg.jpg" alt="" width={500} height={300} /> */}
                {data.map((item)=>{
                    return (
                        <div className="col-md-3" key={item._id}><Image src={item.imageCover} alt="" className='w-100' width={500} height={300} />
                        
                        </div>
                
                    )
                  
                    

                })}
                    </div>
            
        </div>
    </div>
  )
}

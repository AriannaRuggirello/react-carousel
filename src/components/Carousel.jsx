import { useState } from 'react';
import imglist from "../images.json"


function getImgUrl(name) {
    return new URL('../assets/' + name, import.meta.url).href;
}



export default function Carousel(){
    return(
        <section>
            <div className="max-w-screen-xl mx-auto p-4 ">
                <div className="flex items-center justify-between my-8 ">

                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">Previous</button>
                   
                    <div   className="w-full h-full mx-8">
                        {imglist.map((img, i) => {
                            return   <img key={img.id}  src={getImgUrl(img.img)} alt="" />
                        })}
                        </div>
                  
                    
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">Next</button>
               
                </div>
               
            </div>
        </section>

    )
}
            

                

                          
                         
                
          


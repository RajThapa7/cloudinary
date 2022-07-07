import React, { useEffect, useState } from 'react'
import {Image} from 'cloudinary-react'
export default function Home() {
    const [imageIds, setImageIds] = useState();
    const loadImages = async ()=>{
        try {
            const res = await fetch('http://localhost:5000/api/images');
            const data = await res.json();
            setImageIds(data);          
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{loadImages()}, []);
  return (
    <div>
<h1>home</h1>
{imageIds &&
                    imageIds.map((imageId, index) => (
                        <Image
                            key={index}
                            cloudName="raj7"
                            publicId={imageId}
                            width="300"
                            crop="scale"
                           
                        />
                    ))}
    </div>
  )
}

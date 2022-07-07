import React, { useState } from 'react'

export default function Upload() {
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
const handleFileInputChange = (e)=>{
    const file = e.target.files[0];
    previewFile(file)
}

const previewFile = (file)=>{
    const reader  = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = ()=>{
        setPreviewSource(reader.result)
    }
}   

const handleSubmitFile = (e)=>{
    e.preventDefault();
    if(!previewSource) return;
    uploadImage(previewSource);
}
 
const uploadImage = async (base64EncodedImage)=>{
console.log(base64EncodedImage);
try {
    await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: JSON.stringify({ data: base64EncodedImage }),
        mode: 'cors',
        credentials: 'same-origin',
    cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
    });
} catch (error) {
    console.log(error);
}
}
  return (
    <div>
    <h1>upload</h1>
    <form action="" onSubmit={handleSubmitFile}>
<input type="file" name="image" onChange={handleFileInputChange} value={fileInputState} />
<button type = "submit"> submit</button>

    </form>
    { previewSource && <img src={previewSource} alt="chosen" style={{height:"300px", width: "300px"}}/>}
    </div>
  )
}

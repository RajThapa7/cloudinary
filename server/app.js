const { urlencoded } = require('express');
const express = require('express');
const app = express();
const {cloudinary} = require('./utils/cloudinary')
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(urlencoded({limit: '50mb', extended: true}))
app.use(cors());
app.use(express.json({limit: '50mb'}))
app.get('/api/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder:dev_setups')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
});

app.post('/api/upload', async (req, res)=>{
try {
    const filestr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(filestr, {
        upload_preset: 'dev_setups'
    })
    console.log(uploadedResponse);
    res.json({msg: 'yay'})
} catch (error) {
    console.log(error);
    res.status(500).json({err: 'something went wrong'})
}
})

app.listen(port, ()=>{ 
    console.log(`App is listening on port ${port}`);
})
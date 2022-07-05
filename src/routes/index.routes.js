import { Router } from 'express';
import File from '../models/File';

const router = Router();


router.get('/', ( req, res ) => {
    res.send('Comenzando CRUD')
})

router.post('/update/:id', async ( req, res ) => {

    const {id} = req.params;

    await File.findByIdAndUpdate(id, req.body)
    console.log(req.params.id)
    res.send('Comenzando CRUD')
})

router.get('/all', async ( req, res ) => {

    const allFiles =  await File.find();
    console.log(allFiles);
    res.send(allFiles)
})

router.get('/delete/:id', async ( req, res ) => {

    const {id} = req.params;

    await File.findByIdAndDelete(id)
    res.send('File delete')
})

router.post('/add', async (req, res) => {

    // let { 
	// 	title, 
	// 	description,
    //     status
	// } = req.body;
 

    const file = File(req.body);

    const fileAdd = await file.save();

    console.log(fileAdd)

    res.send('document add');


})

export default router;
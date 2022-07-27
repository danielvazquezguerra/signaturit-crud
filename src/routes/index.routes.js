import { Router } from 'express';
import Fruta from '../models/Fruta';


const router = Router();


router.get('/', ( req, res ) => {
    res.send('Comenzando CRUD')
})



router.get('/all', async ( req, res ) => {

    const allFrutas = await Fruta.find();

    console.log(allFrutas)
    res.send(allFrutas);
})





export default router;
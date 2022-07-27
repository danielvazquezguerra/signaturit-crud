import { Router } from 'express';
import {allFrutas} from '../controllers/fruta'


const router = Router();


router.get('/', ( req, res ) => {
    res.send('Comenzando CRUD')
})



router.get('/all', allFrutas )


export default router;
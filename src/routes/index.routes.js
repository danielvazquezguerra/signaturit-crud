import { Router } from 'express';
import File from '../models/File';

const router = Router();


router.get('/', ( req, res ) => {
    res.send('Comenzando CRUD')
})

router.get('/delete', ( req, res ) => {
    res.send('delete')
})

router.post('/add',(req, res) => {

    const file = File(req.body);
    console.log(file);
    res.send('document add');

})

export default router;
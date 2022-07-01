import { Router } from 'express';

const router = Router();


router.get('/', ( req, res ) => {
    res.send('Comenzando CRUD')
})

router.get('/delete', ( req, res ) => {
    res.send('delete')
})

export default router;
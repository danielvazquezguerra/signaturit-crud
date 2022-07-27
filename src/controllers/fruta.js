'use strict';

import Fruta from '../models/Fruta';


const allFrutas = async (req, res) => {

    const allFrutas = await Fruta.find();

    console.log(allFrutas)
    res.send(allFrutas);
}

module.exports = {
    allFrutas
}
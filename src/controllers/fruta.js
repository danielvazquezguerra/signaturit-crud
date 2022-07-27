'use strict';


const allFrutas = (req, res) => {

    res.status(200).send({
        message: 'Trayendo todas las frutas'
    })
}

module.exports = {
    allFrutas
}
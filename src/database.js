import {connect} from "mongoose";
import './database'

( async () =>{

    try {

        const db = await connect('mongodb://localhost/signaturit-crud');
        console.log('DB connected to', db.connection.name )
        
    } catch (error) {

        console.error(error);
        
    }
    

})()

import dotenv from "dotenv"
import connetDB from './db/index.js';
import { app } from "./app.js";

dotenv.config({
    path: './.env'
})

connetDB()
    .then(()=>{
        app.listen(process.env.PORT || 8000, () => {
            console.log("Server is running on PORT:", process.env.PORT)
        })
    }) 
    .catch((err) => {
        console.log("MYAQL DB CONNECTION FAILED !!!", err)
    })
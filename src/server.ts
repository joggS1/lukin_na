require('dotenv').config();
const mongoose = require('mongoose');
import { startSession } from 'mongoose';
import api from './api';
import { getConfig } from './config';

const PORT = getConfig().PORT || 8080;



async function Start() {
    try {
        await mongoose.connect(getConfig().DATABASE_CONNECTION)
        .then(()=>{
            console.log('Successfully connected to database');
            
        })
        api.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
        
    }
} 
Start()
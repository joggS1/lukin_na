import express from 'express';
import { authMiddleWare } from '../../../middlewares/authMiddleWare';


export default (app: express.Application) => {
    app.post(
        '/signin', 
        require('./signIn').default
    );
    app.post(
        '/signup', 
        require('./signUp').default
    );
    app.get(
        '/authme', 
        authMiddleWare, require('./authMe').default
    );
};
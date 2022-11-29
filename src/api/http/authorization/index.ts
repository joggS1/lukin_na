import express from 'express';

export default (app: express.Application) => {
    // app.get(
    //     '/signin', 
    //     require('./signin').default
    // );
    app.post(
        '/signup', 
        require('./signUp').default
    );
};
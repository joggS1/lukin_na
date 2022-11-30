import express from 'express';

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
        require('./authMe').default
    );
};
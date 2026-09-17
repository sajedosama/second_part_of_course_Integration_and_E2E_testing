/*
    Registration: email, password & confirm password

    tests:
        1- all fileds are required
        2- password must be 8 chars or more
        3- all is good, register user
*/
const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../../app');

beforeAll(async () => {
    await mongoose.connection.asPromise();
});


afterAll(async () => {
    await mongoose.connection.close();
});

describe('register', () => {
    it('sould return 400 if any field is missed', async () => {
        const emailRes = await request(app).post('/api/auth/registration');
        expect(emailRes.status).toBe(400);
        expect(emailRes.body.message).toMatch('email is required');

        const passRes = await request(app)
        .post('/api/auth/registration')
        .send({ email : 'test@email.com'});
        expect(passRes.status).toBe(400);
        expect(passRes.body.message).toMatch('password is required');
        
    });
    
    it('sould return 400 if password < 8 chars', async () => {
        const res = await request(app)
            .post('/api/auth/registration')
            .send({ email : 'test@email.com', password : '123'});
        expect(res.status).toBe(400);
        expect(res.body.message).toMatch('password must be at least 8 chars');
        
    });


    it('sould return 400 if confirm password does not match password', async () => {
        const res = await request(app)
            .post('/api/auth/registration')
            .send({ email : 'test@email.com', password : '12345678', comfirmedPassword : '87654321'});
        expect(res.status).toBe(400);
        expect(res.body.message).toMatch('confirmed password must be match the password');
        
    });

    it('sould return 200 and register user', async () => {
        const res = await request(app)
            .post('/api/auth/registration')
            .send({ email : 'test@email.com', password : '12345678', comfirmedPassword : '12345678'});
        expect(res.status).toBe(200);
        expect(res.body.message).toMatch('rigestered successfully');
        
    });
});
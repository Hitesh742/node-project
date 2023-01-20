//not working 

import {UserModel} from '../../../model/users.js';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

describe('generateAuthToken', ()=>{
    it('user generateAuthToken',()=>{
        const payload = {_id: new mongoose.Types.ObjectId(), IsAdmin:true}
        const User = new UserModel(payload);
        const token = User.generateAuthToken();
        const decode = jwt.verify(token, process.env.jwtPrivatekey)
        expect(decode).toMatchObject(payload)
    })
})
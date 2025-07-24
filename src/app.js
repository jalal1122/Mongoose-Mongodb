import Express from 'express';
import User from '../model/user.model.js';


const app = Express();

app.use(Express.json());

const func = async () => {
    let user = await User.create({
        name : "Anas Riaz",
        username : "anasriaz",
        email : "ar@gmail.com",
        passwordd: "12345678"
    })

    console.log(user);
}

func().catch(err => console.error(err));




export default app;
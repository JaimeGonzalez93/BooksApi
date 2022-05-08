import { users } from "../models/user.model";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { httpStatusCode } from "../../utils/httpStatusCode";

const createUser = async (req, res, next) => {
    try {
        const newUser = new user({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        const newUserDB = await newUser.save();

        return res.json({
            status: 201,
            message: httpStatusCode[201],
            data:{user, newUserDb},
        })
    } catch (error) {
        return next (error);
    }
}

const authenticate = async (req, res, next) => {
    try {
        const userInfo = await User.findOne({email: req.body.email})

        if (bcrypt.compareSync(req.body.password, userInfo.password)){
            userInfo.password = null;

            const token = jwt.sign({
                id:userInfo._id,
                name: userInfo.name
            },
            req.server.get("secretKey"),
            {expiresIn:"1h"}

            );

            return res.json({
                status:200,
                message: httpStatusCode[200],
                data: {user:userInfo, token: token},
            });
        }
    } catch (error) {
        return next(error);
    }
}

const logout = (req, res, next) => {
    try {
        return res.json({
            status:200,
            message: httpStatusCode[200],
            token:null,
        })

    } catch (error) {
        return next(error);
    }
}

export {createUser, authenticate, logout}
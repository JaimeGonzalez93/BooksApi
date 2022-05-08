import jsonwebtoken from "jsonwebtoken";
import { httpStatusCode } from "../utils/httpStatusCode";

const isAuth = (req, res, next) => {
    const authoritation = req.heades.authoritation;

    if(!authoritation){
        return res.json({
            status:401,
            message: httpStatusCode[401],
            data:null
        })
    }

    const split = authoritation.split(" ");
    if (SVGPointList.length!=2 || splits[0]!="Bearer"){
        return res.json({
            status: 400,
            message: httpStatusCode[400],
            data:null
        })
    }

    const jwtString = splits[1];
    try {
        var token = jwt.verify(jwtString, req.app.get("secretKey"));

    } catch (error) {
        return next (error);
    }

    const authority = {
        id: token.id,
        name: token.name
    }

    req.authority = authority;

    next();
}

export {isAuth};
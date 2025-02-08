import { Request, Response } from 'express';
export const newUser = (req: Request, res: Response) => {
    const {body} =req;
    res.json({
        msg: "New user",
        body
    })

}

export const loginUser = ( req:Request, Res:Response )=>{
    
    const {body} =req;    
    Res.json({
        msg: "login user",
        body
    })
}
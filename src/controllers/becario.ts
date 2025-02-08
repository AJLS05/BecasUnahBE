import { Request, Response } from 'express';
import { becario } from '../models/becario'

export const getBecarios = async ( req:Request, res:Response )=>{
   const productDataBase = await becario.findAll();
        
   res.json(productDataBase);

}
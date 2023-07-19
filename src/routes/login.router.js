import express from "express";
export const RouterLogin = express.Router();
import { Usuario } from "../DAO/models/users.model.js";

RouterLogin.post("/", async (req, res) => {
    try {
        const { email,contraseña } = req.body;
        const usuario = await Usuario.findOne({
            where: {
              email: email,         
              contraseña: contraseña 
            },
          });
      
        if (usuario !== null){
            return res.status(200).json({
                status: 'success',
                msg: 'user login',
                codigo:200,
                data: usuario
              });
        }else{
            return res.status(400).json({
                status: 'error',
                msg: 'email o contraseña incorrecto',
                codigo:1000,
                data: null
              });
        }
    } catch (e) {
      console.log(e);
    return res.status(500).json({
      status: 'error',
      msg: 'something went wrong :(',
      data: {},
    });
    }
  });

import { Encargado } from "../DAO/models/encargado.model";

class EncargadoService {
    async getAll(){
      const encargados = await Encargado.findAll(); 
      return encargados
    }
}

export const encargadoService = new EncargadoService();
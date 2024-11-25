import instance from "../apis/app";

class ReplacementService {

    list = () => instance.get('/API/ControladorReemplazos');
    create = (data) => instance.post('/API/ControladorReemplazos', data);

}

const Reemplazos = new ReplacementService();
export default Reemplazos;
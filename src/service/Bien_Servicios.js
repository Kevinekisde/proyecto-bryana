import instance from "../apis/app";

class BienServicioService {

    get = () => instance.get('/API/ControladorBienServicio');

}

const BienServicio = new BienServicioService();
export default BienServicio;
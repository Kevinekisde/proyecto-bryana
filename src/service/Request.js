import instance from "../apis/app";

class RequestService {

    get = () => instance.get('/API/ControladorCotizacion');
    post = (data) => instance.post('/API/ControladorCotizacion', data);
    update = (id, data) => instance.put(`/API/ControladorCotizacion/${id}`, data);

}

const Request = new RequestService();
export default Request;
import instance from "../apis/app";

class RequestOCService {

    get = () => instance.get('/API/ControladorTicket');
    post = (data) => instance.post('/API/ControladorTicket', data);

}

const RequestOC = new RequestOCService();
export default RequestOC;
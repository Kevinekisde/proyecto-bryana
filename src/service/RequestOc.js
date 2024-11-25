import instance from "../apis/app";

class RequestOCService {

    get = () => instance.get('/API/ControladorTicket');

}

const RequestOC = new RequestOCService();
export default RequestOC;
import instance from "../apis/app";


class ProvidersService {
    get = () => instance.get(`/API/ControladorProveedores/`);
    post = data => instance.post('/API/ControladorProveedores/', data)
}

const User = new ProvidersService();
export default User;
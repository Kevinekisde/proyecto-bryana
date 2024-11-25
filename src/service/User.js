import instance from "../apis/app";


class UserService {

    post = data => instance.post('/API/ControladorUsuario', data);
    update = (id, data) => instance.put(`/API/ControladorUsuario/${id}`, data);
    get = id => instance.get(`/API/ControladorUsuario/${id}`);
    list = () => instance.get('/API/ControladorUsuario');
    auth = data => instance.post('/API/ControladorAutentizar', data);
}

const User = new UserService();
export default User;
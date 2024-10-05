import instance from "../apis/app";


class UserService {

    post = data => instance.post('/API/ControladorUsuario', data);
    get = id => instance.get(`/API/ControladorUsuario/${id}`);
    auth = data => instance.post('/API/ControladorUsuario', data);
}

const User = new UserService();
export default User;
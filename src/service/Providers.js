import instance from "../apis/app";


class ProvidersService {
    get = () => instance.get(`/API/ControladorProveedores/`);
    post = data => instance.post('/API/ControladorProveedores/', data)
    update = (data, id) => instance.put(`/API/ControladorProveedores/${id}`, data)
}

const Provider = new ProvidersService();
export default Provider;
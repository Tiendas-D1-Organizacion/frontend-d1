import axios from 'axios';

const API_GATEWAY = 'http://localhost:8080/api';

export const comprarProducto = async (usuarioId, productoId, cantidad) => {
    const response = await axios.post(`${API_GATEWAY}/compras`, {
        usuarioId,
        productoId,
        cantidad
    });
    return response.data;
};

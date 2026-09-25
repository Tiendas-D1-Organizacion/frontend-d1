import React, { useState } from 'react';
import { comprarProducto } from './api';

export default function App() {
    const [mensaje, setMensaje] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCompra = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Hardcodeado para el demo (Usuario 1 compra 2 unidades del Producto 1)
            const orden = await comprarProducto(1, 1, 2);
            setMensaje(`¡Compra exitosa! Orden #${orden.id} generada en estado: ${orden.estado}. Revisa tu correo.`);
        } catch (error) {
            setMensaje('Error procesando la compra: Verifica que exista stock e IDs válidos.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '500px', margin: '0 auto' }}>
            <h1 style={{ color: '#e52421' }}>Tiendas D1 - AutoCaja</h1>
            
            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                <h3>Leche Entera Larga Vida</h3>
                <p>Precio: $3,500</p>
                <button 
                    onClick={handleCompra} 
                    disabled={loading}
                    style={{ 
                        background: '#e52421', color: 'white', padding: '10px 20px', 
                        border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%'
                    }}>
                    {loading ? 'Procesando...' : 'Comprar 2 Unidades'}
                </button>
            </div>

            {mensaje && (
                <div style={{ marginTop: '20px', padding: '15px', background: '#e8f5e9', borderLeft: '5px solid #4caf50' }}>
                    {mensaje}
                </div>
            )}
        </div>
    );
}

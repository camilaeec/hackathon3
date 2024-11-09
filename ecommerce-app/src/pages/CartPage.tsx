import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface CartItem {
    itemId: string;
    qty: number;
}

const CartPage: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const fetchCart = async () => {
        try {
            const response = await api.get(/cart/user-id-aqui); // Reemplaza 'user-id-aqui' con el id correcto
            setCartItems(response.data.products);
        } catch (error) {
            alert('Error al cargar el carrito');
        }
    };

    const handleRemove = async (itemId: string) => {
        // Aquí puedes implementar la lógica para eliminar un item del carrito
    };

    const handleUpdateQty = async (itemId: string, qty: number) => {
        // Aquí puedes implementar la lógica para actualizar la cantidad de un item en el carrito
    };

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Carrito</h1>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.itemId} className="flex justify-between items-center mb-4">
                        <span>Producto {item.itemId} - Cantidad: {item.qty}</span>
                        <div>
                            <button onClick={() => handleUpdateQty(item.itemId, item.qty - 1)}>-</button>
                            <button onClick={() => handleUpdateQty(item.itemId, item.qty + 1)}>+</button>
                            <button onClick={() => handleRemove(item.itemId)}>Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartPage;
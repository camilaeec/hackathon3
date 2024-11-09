import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

interface Product {
    itemId: string;
    title: string;
    price: number;
    imgUrl: string;
    stars: number;
    isBestSeller: boolean;
}

const ProductDetailPage: React.FC = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    const fetchProduct = async () => {
        try {
            const response = await api.get(/item/${id});
            setProduct(response.data);
        } catch (error) {
            alert('Error al cargar los detalles del producto');
        }
    };

    const handleAddToCart = async () => {
        try {
            await api.put('/cart', { itemId: product?.itemId, userId: 'user-id-aqui' });
            alert('Producto agregado al carrito');
        } catch (error) {
            alert('Error al agregar el producto al carrito');
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (!product) return <p>Cargando...</p>;

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <img src={product.imgUrl} alt={product.title} className="w-full h-64 object-cover" />
            <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
            <p>Estrellas: {product.stars}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
                onClick={handleAddToCart}
            >
                Agregar al Carrito
            </button>
        </div>
    );
};

export default ProductDetailPage;
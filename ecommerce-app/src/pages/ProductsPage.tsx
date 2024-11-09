import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import api from '../services/api';

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState([]);
    const [lastKey, setLastKey] = useState<string | null>(null);

    const fetchProducts = async () => {
        try {
            const response = await api.get('/items', { params: { limit: 10, lastKey } });
            setProducts((prev) => [...prev, ...response.data.items]);
            setLastKey(response.data.lastKey);
        } catch (error) {
            alert('Error al cargar productos');
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Productos</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <ProductCard
                        key={product.itemId}
                        title={product.title}
                        price={product.price}
                        imageUrl={product.imgUrl}
                        onAddToCart={() => console.log('Agregar al carrito', product.itemId)}
                    />
                ))}
            </div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-8 hover:bg-blue-600"
                onClick={fetchProducts}
            >
                Cargar más
            </button>
        </div>
    );
};

export default ProductsPage;
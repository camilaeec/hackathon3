import React, { useEffect, useState } from 'react';
import api from '../services/api';
import ProductCard from '../components/ProductCard';

interface Product {
    itemId: string;
    title: string;
    price: number;
    imgUrl: string;
}

const AdminProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const response = await api.get('/items', { params: { limit: 10 } });
            setProducts(response.data.items);
        } catch (error) {
            alert('Error al cargar productos');
        }
    };

    const handleDelete = async (itemId: string) => {
        try {
            await api.delete(/item/${itemId});
            setProducts(products.filter((product) => product.itemId !== itemId));
            alert('Producto eliminado');
        } catch (error) {
            alert('Error al eliminar el producto');
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Gestión de Productos</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <ProductCard
                        key={product.itemId}
                        title={product.title}
                        price={product.price}
                        imageUrl={product.imgUrl}
                        onAddToCart={() => {}}
                    />
                ))}
            </div>
        </div>
    );
};

export default AdminProductsPage;
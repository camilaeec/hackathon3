import React from 'react';

interface ProductCardProps {
    title: string;
    price: number;
    imageUrl: string;
    onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, imageUrl, onAddToCart }) => {
    return (
        <div className="border p-4 rounded-lg shadow-lg">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <h2 className="text-lg font-semibold mt-2">{title}</h2>
            <p className="text-xl font-bold">${price.toFixed(2)}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
                onClick={onAddToCart}
            >
                Agregar al Carrito
            </button>
        </div>
    );
};

export default ProductCard;
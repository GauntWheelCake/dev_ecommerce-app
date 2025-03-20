import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        const product = products.find(item => item._id === productId);
        if (product) {
            setProductData(product);
            setImage(product.image[0]);
        }
    }, [productId, products]);

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/* Product Data */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {productData.image.map((item, index) => (
                            <img
                                key={index}
                                src={item}
                                className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ${image === item ? 'border-2 border-orange-500' : ''}`}
                                alt="Product"
                                onClick={() => setImage(item)}
                            />
                        ))}
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-full h-auto' src={image} alt="Product" />
                    </div>
                </div>

                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        {[...Array(4)].map((_, i) => (
                            <img key={i} src={assets.star_icon} alt="star" className="w-3.5" />
                        ))}
                        <img src={assets.star_dull_icon} alt="star" className="w-3.5" />
                        <p className='pl-2'>(122)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select Size</p>
                        <div className='flex gap-2'>
                            {productData.sizes.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSize(item)}
                                    className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}>
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                    <hr className='mt-8 sm:w-4/5' />
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>

            {/* Description & Reviews Selection */}
            <div className='mt-20'>
                <div className='flex'>
                    <button
                        className={`border px-5 py-3 text-sm ${activeTab === 'description' ? 'bg-gray-200' : ''}`}
                        onClick={() => setActiveTab('description')}
                    >
                        Description
                    </button>
                    <button
                        className={`border px-5 py-3 text-sm ${activeTab === 'reviews' ? 'bg-gray-200' : ''}`}
                        onClick={() => setActiveTab('reviews')}
                    >
                        Reviews (122)
                    </button>
                </div>
                <div className='border px-6 py-6 text-sm text-gray-500'>
                    {activeTab === 'description' ? (
                        <p>{productData.description}</p>
                    ) : (
                        <div className='flex flex-col gap-4'>
                            <p>"Great product! Highly recommended." - User A</p>
                            <p>"Fast shipping and excellent quality." - User B</p>
                            <p>"Will definitely buy again!" - User C</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Related Products */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>
    ) : <div className='opacity-0'></div>;
};

export default Product;

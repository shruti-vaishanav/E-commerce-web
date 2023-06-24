/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import type { FC, Dispatch } from 'react'
import { useLocation, Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Rating } from '@mui/material'
import { productDetail } from '../../../constant/common'
import { addProduct } from '../../../redux/action/cart'
import { reviews } from '../../../constant/common'
import { getProduct } from '../../../redux/action/product'
import EarningCard from '../../../components/Skeleton'

const ProductDetail: FC = () => {
    const { cartList } = useSelector((state: any) => state.cart);
    const { loginUser } = useSelector((state: any) => state.user);
    const { currentPath } = useSelector((state: any) => state.window);
    const dispatch: Dispatch<any> = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState<any>({});
    const [count, setCount] = useState<number>(1);
    const [isLoading, setLoading] = useState<boolean>(true);

    // skeleton

    const get = async () => {
        const response = await getProduct(id)
        if (response) {
            setProductDetails({ ...response.data });
        }
    }
    useEffect(() => {
        get();
    }, []);
    useEffect(() => {
        if (productDetails?.id) {
            setLoading(false);
        }
    }, [productDetails]);

    const addTOCart = () => {
        if (loginUser.token) {
            dispatch(addProduct({ ...productDetails, quantity: count }, cartList));
        } else {
            navigate("/login");
        }
    }

    const incrementCount = () => {
        setCount(count + 1)
    };
    const decrementCount = () => {
        setCount(count - 1)
    };

    return (
        <>

            <div className="bg-white">
                <div className="pt-6">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            {productDetail.breadcrumbs.map((breadcrumb) => (
                                <li key={breadcrumb.id}>
                                    <div className="flex items-center">
                                        <Link to={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                            {breadcrumb.name}
                                        </Link>
                                        <svg
                                            width={16}
                                            height={20}
                                            viewBox="0 0 16 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-5 w-4 text-gray-300"
                                        >
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>
                            ))}
                            <li className="text-sm">
                                <Link to={`/product-detail`} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                    {productDetails.title}
                                </Link>
                            </li>
                        </ol>
                    </nav>
                    {isLoading === true ?
                        (
                            <EarningCard />
                        ) : (
                            <>
                                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                                    <div className="aspect-h-4 aspect-w-3  overflow-hidden rounded-lg lg:block">
                                        {productDetails?.images ? (
                                            <img
                                                src={productDetails?.images[1]}
                                                alt={productDetails.title}
                                                className="h-full w-full object-cover object-center sm:max-w-2xl"
                                            />
                                        ) :
                                            '<EarningCard />'
                                        }
                                    </div>
                                    {/* Options */}
                                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                                        <h2 className="sr-only">product information</h2>
                                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">{productDetails.title}</h1>
                                        </div>
                                        <p className="text-lg tracking-tight text-gray-900 pt-3 d-flex font-semibold">
                                            <span className='text-red-600 text-lg'> (-{productDetails.discountPercentage})</span>
                                            ${productDetails.price}
                                        </p>
                                        {/* Reviews */}
                                        <div className=" items-center rating mt-6">
                                            <Rating readOnly name="half-rating" defaultValue={productDetails.rating} precision={0.5}
                                                className='text-gray-900 text-gray-200 h-5 w-5 flex-shrink-0'
                                                aria-hidden="true"
                                            />
                                            <span><p>{productDetails.rating}</p></span>
                                            <Link to="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                {reviews.totalCount} reviews
                                            </Link>
                                        </div>
                                        <div className="py-3 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-8 lg:pr-4 lg:pt-6">
                                            {/* Description and details */}
                                            <div className="space-y-6">
                                                <p className="text-base text-gray-900">{productDetails.description}</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '20px' }} className='quantity'>
                                            Quantity
                                            <div className="counter_quantity" >
                                                <button className="increment" onClick={decrementCount} type="button">-</button>
                                                {count}
                                                <button className="increment" onClick={incrementCount} type="button" >+</button>
                                            </div>
                                        </div>
                                        <button
                                            type="button" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={addTOCart}
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                </div>
            </div>
        </>
    )
}






export default ProductDetail;

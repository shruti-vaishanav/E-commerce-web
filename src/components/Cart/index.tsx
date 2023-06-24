/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CartList from './cartList'



const Cart: FC<any> = ({ handleClose }: any) => {
    const { cartList } = useSelector((state: any) => state.cart);

    const navigate = useNavigate();

    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cartList.map((item: any) => {
            totalQuantity += item.quantity
            totalPrice += item.price * item.quantity
        })
        return { totalPrice, totalQuantity }
    }
    const handleCheckout = () => {
        { cartList?.length !== 0 ? navigate("/products/checkout") : navigate("/") }
    }
    return (

        <Dialog.Panel className="pointer-events-auto w-screen max-w-md" >

            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                    {cartList?.length === 0 ? (
                        <>
                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                <div className="flex items-start justify-between">
                                    <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                                    <div className="ml-3 flex h-7 items-center">
                                        <button
                                            type="button"
                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                            onClick={handleClose}
                                        >
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className='emptyCart'>
                                    <div>
                                        <img src="src\assets\empty_cart.0ec892e2bd85c9f378ba.png" alt="" className='emptyCartImg' />
                                        <h3 className='text-center font-semibold'>Cart is empty</h3>
                                        <p>Look like you have no items in your shopping cart.</p>
                                    </div>

                                </div>

                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                <div className="flex items-start justify-between">
                                    <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                                    <div className="ml-3 flex h-7 items-center">
                                        <button
                                            type="button"
                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                            onClick={handleClose}
                                        >
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <div className="flow-root">
                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                            {cartList && cartList.map((cart: any, index: number) =>
                                                <CartList cart={cart} index={index} />
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p> ({getTotal().totalQuantity} item)
                                        : <strong>${getTotal().totalPrice}</strong></p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                <div className="mt-6">
                                    <button
                                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                        onClick={handleCheckout}
                                    >
                                        Checkout
                                    </button>
                                </div>
                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                    <p>
                                        <button
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                            onClick={handleClose}
                                        >
                                            Continue Shopping
                                            <span aria-hidden="true"> &rarr;</span>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </>
                    )}

                </div>
            </div>


        </Dialog.Panel >

    )
}

export default Cart

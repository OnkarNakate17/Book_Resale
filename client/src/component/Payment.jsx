import React, { useState } from 'react';
import confirm from '../../public/confirm.png'


export default function Payment() {
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cash_on_delivery");

    const handleConfirmOrder = () => {
        // Perform any necessary actions when confirming the order
        // For now, just set orderConfirmed to true
        setOrderConfirmed(true);
    };

    const closeModal = () => {
        setOrderConfirmed(false);
    };

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    const renderPaymentFields = () => {
        switch (selectedPaymentMethod) {
            case "cash_on_delivery":
                return null;
            case "credit_card":
            case "debit_card":
                return (
                    <>
                        <div className='mt-4 space-y-2'>
                            <span>Card Name</span><br />
                            <input type="text" className='w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white' placeholder='Enter Name' />
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Card Number</span><br />
                            <input type="text" className='w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white' placeholder='Enter Number' />
                        </div>
                    </>
                );
            case "paypal":
                return (
                    <>
                        <div className='mt-4 space-y-2'>
                            <span>paypal Name</span><br />
                            <input type="text" className='w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white' />
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>paypal Number</span><br />
                            <input type="text" className='w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white' />
                        </div>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <>
            <div className='dark:bg-slate-900 dark:text-white'>
                <div className="flex h-screen items-center justify-center">
                    <div className="w-[600px]">
                        <div className='modal-box dark:bg-slate-600 dark:text-white'>
                            <form method="dialog">
                                <h3 className="font-bold text-lg dark:bg-slate-900 dark:text-white">Payment Method</h3>
                                <div className='mt-4 space-y-2 '>
                                    <span>Payment Method</span><br />
                                    <select
                                        className='w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                                        onChange={handlePaymentMethodChange}
                                        value={selectedPaymentMethod}
                                    >
                                        <option value="cash_on_delivery">Cash On Delivery</option>
                                        <option value="credit_card">Credit Card</option>
                                        <option value="debit_card">Debit Card</option>
                                        <option value="paypal">PayPal</option>
                                        <option value="bank_transfer">Bank Transfer</option>
                                    </select>
                                </div>
                                {renderPaymentFields()}
                                <div className='flex justify-around mt-10'>
                                    <button
                                        className='bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-600'
                                        onClick={handleConfirmOrder}
                                    >
                                        Confirm Order
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    {orderConfirmed && (
                        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="modal-box justify-center text-center ">
                                
                                <h3 className="font-bold text-lg">Order Status!</h3>
                                <div className='flex justify-center items-center'>
                                    <img src={confirm} className='w-1/2' />

                                </div>
                                <p className="py-4">Your Order is Confirmed!</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button
                                            className="bg-green-500 justify-center text-center  text-white rounded-md px-3 py-1 hover:bg-green-600"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

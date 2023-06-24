/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Typography, List, ListItem, ListItemText, Grid } from '@mui/material';
import { payments, addresses } from '../../constant/common';


export default function Review() {
    const { cartList } = useSelector((state: any) => state.cart)
    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cartList.map((item: any) => {
            totalQuantity += item.quantity
            totalPrice += item.price * item.quantity
        })
        return { totalPrice, totalQuantity }
    }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {cartList.map((product: any) => (
                    <>
                        {/* <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
                            <ListItemText
                                primary={product.title}
                            // secondary={product.description}
                            />
                            <Typography sx={{ fontWeight: 900 }}>${product.price}</Typography>
                        </ListItem> */}
                        <li className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                    src={product.images[1]}
                                    alt={product.title}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            <a>{product.title}</a>
                                        </h3>
                                        <p className="ml-4">${product.price}</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', }} className='quantity'>
                                        <div className="counter_quantity" >
                                            <button className="increment Mui-disabled" type="button">-</button>
                                            {product.quantity}
                                            <button className="increment" type="button" >+</button>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <button
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li></>
                ))}
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        <p> ({getTotal().totalQuantity} item)
                            : <strong>${getTotal().totalPrice}</strong>
                        </p>
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>John Smith</Typography>
                    <Typography gutterBottom>{addresses.join(', ')}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

        </React.Fragment >
    );
}
import { UISliceActions } from "./ui-slice";
import { useDispatch } from "react-redux";
import { CartSliceActions } from "./cart-slice";


export const fetchCartData = () => {
    // const dispatch = useDispatch();
    return async (dispatch) => {
        dispatch(
            UISliceActions.showNotification({
                status: 'pending',
                title: 'Fetching...',
                message: 'Fetching cart data...',
            })
        );

        const fetchData = async () => {
            const response = await fetch('https://react-http-5a556-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');
            if (!response.ok) {
                throw new Error('Fetching cart data failed');
            }
            const data = response.json();
            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(
                CartSliceActions.replaceCart({
                    // ERROR HANDLING:
                    // if cartData.items is undefined (having an empty cart & Firebase has no 'items' key), 
                    // dispatch an empty array instead (which is the same as an empty cart)
                    // ?. stands for optional chaining. 
                    // If it's used without ||, replace the key with 'undefined' instead of throwing an error
                    items: cartData?.items || [],
                    totalQuantity: cartData?.totalQuantity || 0,
                })
            );
        } catch (error) {
            // fetchCartData().catch(error => {
            dispatch(
                UISliceActions.showNotification({
                    status: 'error',
                    title: 'Failed!',
                    message: 'Fetching cart data failed',
                })
            );
            // });
        }
    }
};


export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            UISliceActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!',
            })
        );
        const sendRequest = async () => {
            const response = await fetch('https://react-http-5a556-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cart),
            });
            if (!response.ok) {
                throw new Error('Sending cart data failed');
            }
        };

        try {
            await sendRequest();
            dispatch(
                UISliceActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!',
                })
            );
        } catch (error) {
            sendCartData().catch(error => {
                dispatch(
                    UISliceActions.showNotification({
                        status: 'error',
                        title: 'Failed!',
                        message: 'Sending cart data failed',
                    })
                );
            });
        }
    };
};

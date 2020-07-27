import React, { useReducer } from 'react'
import CustomerContext from './customerContext'
import CustomerReducer from './customerReducer'
import { parse } from 'papaparse'
import { GET_CUSTOMERS, FETCH_ERROR } from '../types'

const CustomerState = (props) => {

    const initialState = {
        customers: [],
        distribution: null,
        totalAmount: 0,
        totalOrders: 0,
        loading: true,
    }

    const [state, dispatch] = useReducer(CustomerReducer, initialState);

    const getCustomers = async () => {
        try {
            const res = await fetch('./customers.txt')
            const custs = await res.text();
            const parsedResponse = parse(custs.trim(), {
                delimiter: ",",
                header: true,
                dynamicTyping: true,
                transformHeader:function(h) {
                  return h.trim();
                }
            })
            dispatch({
                type: GET_CUSTOMERS,
                payload: parsedResponse.data
            })
        } catch (err) {
            console.error(err);
            dispatch({
                type: FETCH_ERROR
            })
        }
    }


    return (
        <CustomerContext.Provider
        value={{
            customers: state.customers,
            distribution: state.distribution,
            totalAmount: state.totalAmount,
            totalOrders: state.totalOrders,
            loading: state.loading,
            getCustomers,
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}

export default CustomerState

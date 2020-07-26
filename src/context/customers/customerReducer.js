import { FETCH_ERROR, GET_CUSTOMERS } from '../types'
import customerDistribution from '../../utils/customerDistribution'
import ordersByCustomer from '../../utils/ordersByCustomer'
import amount from '../../utils/totalAmount'

export default (state, action) => {
    const { type, payload } = action;
    switch (type) {
        
        case GET_CUSTOMERS:
            const customerSurvey = ordersByCustomer(payload)
            return {
                ...state,
                customers: payload,
                totalOrders: payload.length,
                distribution: customerDistribution(customerSurvey),
                totalAmount: amount(payload),
                loading: false
            }

        case FETCH_ERROR:
            return {
                ...state,
                customers: [],
                loading: false
            }
        
        default:
            return state;
    }
}
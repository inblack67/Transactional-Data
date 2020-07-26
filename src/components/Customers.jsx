import React, { useContext, useEffect } from 'react'
import CustomerContext from '../context/customers/customerContext'
import highcharts from 'highcharts'
import ReactHighcharts from 'highcharts-react-official'

const Customers = () => {

    const customerContext = useContext(CustomerContext);

    const { loading, getCustomers, totalOrders, totalAmount, distribution } = customerContext;

    useEffect(() => {
        getCustomers();
        // eslint-disable-next-line
    }, [])

    let options = {};

    if(distribution){
        options = {
            chart: {
                type: 'bar'
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Orders By Customers'
            },
            xAxis: {
                categories: ['1', '2','3', '4', '5+'],
                title: {
                    text: 'No. Of Orders'
                }
            },
            yAxis: {
                title: {
                    text: 'No. Of Customers'
                }
            },
            series: [
                {
                    name: 'Customers',
                    data: [distribution.once.length, distribution.twice.length, distribution.thrice.length, distribution.quad.length, distribution.rest.length]
                }
            ]
        }
    }


    if(loading){
        return <h3 className='center'>Loading...</h3>
    }

    return (
        <div>
            <ReactHighcharts highcharts={highcharts} options={options} />
            <hr/>
            <h5>Customer Distribution</h5>
            <table className='striped'>
                <thead>
                <tr>
                    <th>No. Of Orders</th>
                    <th>Count Of Customers</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>{ distribution.once.length }</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>{ distribution.twice.length }</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>{ distribution.thrice.length }</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>{ distribution.quad.length }</td>
                </tr>
                <tr>
                    <td>5+</td>
                    <td>{ distribution.rest.length }</td>
                </tr>
                </tbody>
            </table>
            <h5>Total Orders Received: <span className="red-text">
            { totalOrders }</span></h5>
            <hr/>
            <h5>Total Amount: <span className="red-text">
            { totalAmount }</span></h5>
            <hr/>
            <h5>Customers Who Ordered Once</h5>
            <ul className='collection'>
                { distribution && distribution.once.map(name => <li className='collection-item' key={name}>
                    { name }
                </li>) }
            </ul>
        </div>
    )
}

export default Customers

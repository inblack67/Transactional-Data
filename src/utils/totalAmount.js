export default (customers) => {
    return customers.reduce((acc, curr) => {
        if(curr.Amount){
            return acc + curr.Amount
        }
        return acc;
    }, 0)
    // let sum = 0;
    // customers.forEach(customer => {
    //     if(customer.Amount){
    //         console.log(customer.Amount);
    //         sum += customer.Amount;
    //     }
    // })
    // return sum
}
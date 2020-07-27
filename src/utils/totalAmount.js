export default (customers) => {
    return customers.reduce((acc, curr) => {
        if(curr.Amount){
            return acc + curr.Amount
        }
        return acc;
    }, 0)
}
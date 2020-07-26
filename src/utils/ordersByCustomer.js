export default (customers) => {
    let obj = {};
    customers.forEach(customer => {
        if(obj[customer.Name]){
            obj[customer.Name]++;
        }
        else{
            obj[customer.Name] = 1;
        }
    })
    return obj;
}
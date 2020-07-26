export default (obj) => {
    let once = [];
    let twice = [];
    let thrice = [];
    let quad = [];
    let rest = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if(obj[key] === 1){
                once.push(key);
            }
            if(obj[key] === 2){
                twice.push(key);
            }
            if(obj[key] === 3){
                thrice.push(key);
            }
            if(obj[key] === 4){
                quad.push(key);
            }
            else{
                rest.push(key);
            }
        }
    }

    return  { once, twice, thrice, quad, rest }
    // return [ { once }, { twice }, { thrice }, { quad }, { rest } ];
}
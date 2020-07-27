export default (obj) => {
    let once = [];
    let twice = [];
    let thrice = [];
    let quad = [];
    let rest = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            switch(obj[key]){
                case 1: once.push(key)
                break;
                case 2: twice.push(key)
                break;
                case 3: thrice.push(key)
                break;
                case 4: quad.push(key)
                break;
                default: rest.push(key)
            }
        }
    }

    return  { once, twice, thrice, quad, rest }
}
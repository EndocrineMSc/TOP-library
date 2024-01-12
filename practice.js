let head = {
    glasses: 1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};
  
let pockets = {
    money: 2000
};

Object.setPrototypeOf(table.prototype, head.prototype);
Object.setPrototypeOf(bed.prototype, table.prototype);
Object.setPrototypeOf(pockets.prototype, bed.prototype);

console.log(pockets.pen);
console.log(bed.glasses);
console.log(table.money);

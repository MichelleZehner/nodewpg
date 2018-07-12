const brand = 'brand';
const price = 'price';

const jeep = {
  brand: 'Jeep Wrangler',
  price: 34000,
  brand2: function(brand) {
    console.log(`the brand ${this.brand} is`);
  },
  price2: function() {
    this.price++;
  }
}

console.log(jeep[brand2]); 
console.log(jeep[price2]); 
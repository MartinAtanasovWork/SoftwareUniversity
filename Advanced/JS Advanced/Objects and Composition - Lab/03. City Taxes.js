function cityTaxes(name,population,treasury){
    let cityTaxes = 
    {
        name,population,treasury,taxRate : 10,
        collectTaxes(){
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage){
            this.population = Math.floor(this.population + this.population * percentage/100);
        },
        applyRecession(percentage){
            this.treasury = this.treasury * (1 - percentage/100);
        }
    }
    return cityTaxes;
}
const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
city.applyRecession(10);
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

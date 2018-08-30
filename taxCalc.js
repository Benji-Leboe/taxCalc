var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, salesTax) {
  // Implement your code here
  var result = {};

  for(var company in salesData){
    var compName = salesData[company].name;
    var compSales = salesData[company].sales;
    var compProv = salesData[company].province;
    var salesRate = salesTax[compProv];

    var taxCalc = function(salesTot, salesRate){
      taxTotal = salesTot * salesRate;
      return taxTotal;
    }

    var saleTotal = function(compSales){
      salesTot = 0;
      for(var i = 0; i < compSales.length; i++){
        salesTot += compSales[i];
      }
      return salesTot;
    }

    if(!result.hasOwnProperty(compName)){
      result[compName] = {
        totalSales: saleTotal(compSales),
        totalTaxes: taxCalc(salesTot, salesRate)
      }; 
    }else{
      result[compName].totalSales += saleTotal(compSales);
      result[compName].totalTaxes += taxCalc(salesTot, salesRate);
    }

  }
  return result;
  
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

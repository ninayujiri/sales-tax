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



function sumArr(total, num) {
    return total + num;
}

function calculateSalesTax(companySalesData, salesTaxRates) {
   var report = {};
   for (var i = 0; i < companySalesData.length ; i++) {
     var companySales = companySalesData[i].sales;
     var totalCompanySales = companySales.reduce(sumArr);
     var provTax = salesTaxRates[companySalesData[i].province];
     var companyTax = totalCompanySales * provTax;
     var companyName = companySalesData[i].name;
     if (report[companyName]) {
       report[companyName].totalSales += totalCompanySales;
       report[companyName].totalTaxes += companyTax;
     } else {
       report[companyName] = {totalSales: totalCompanySales, totalTaxes: companyTax};
     }
  }
  return report;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);


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


//9. Electricity Bill Calculation with Peak Hours

function calculateElectricityBill(units, timeOfDay) {
  let rate = 0;
  if (units < 100) {
    rate = 5;
  } else if (units <= 300) {
    rate = 4;
  } else {
    rate = 3;
  }

  let totalBill = units * rate;
  
  if (timeOfDay >= 20 || timeOfDay < 8) {  // Peak hours (8 PM - 8 AM)
    totalBill *= 1.10;  // 10% extra charge during peak hours
  }

  return totalBill;
}
 console.log(calculateElectricityBill(300,32))
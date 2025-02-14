
//5. Movie Ticket Pricing with Time and Age Discount

function calculateTicketPrice(age, showTime) {
  let price = 12;  // Standard price
  
  if (showTime < 17) {  // Matinee show before 5 PM
    price *= 0.80;  // 20% discount
  }

  if (age > 60) {
    price *= 0.70;  // 30% discount for seniors
  } else if (age < 12) {
    price *= 0.60;  // 40% discount for children
  }

  return price;
}
console.log(calculateTicketPrice(60,14));
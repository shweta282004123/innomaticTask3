
//2. Online Shopping Discount & Free Shipping


function calculateFinalAmount(orderAmount) {
  let discount = 0;
  if (orderAmount > 1000) {
    discount = 0.20;  // 20% discount for orders above $1000
  } else if (orderAmount >= 500) {
    discount = 0.10;  // 10% discount for orders between $500 and $1000
  }
  
  const discountedAmount = orderAmount - (orderAmount * discount);
  const shipping = discountedAmount > 50 ? 0 : 10;  // Free shipping if above $50
  
  return discountedAmount + shipping;
}
   console.log(calculateFinalAmount(5000));
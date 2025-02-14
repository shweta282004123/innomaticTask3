

//7. E-commerce Coupon Redemption

function applyCoupon(orderAmount, couponCode) {
  if (couponCode === "DISCOUNT10" && orderAmount > 500) {
    return orderAmount * 0.90;  // 10% off for orders above $500
  } else if (couponCode === "FREESHIP" && orderAmount > 200) {
    return orderAmount;  // Free shipping for orders above $200
  }
  return orderAmount;  // No discount if conditions aren't met
}
console.log(applyCoupon( 400,"DISCOUNT10"));


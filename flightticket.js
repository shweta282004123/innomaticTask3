
//10. Flight Ticket Booking System


function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
  let baseFare = 300;
  if (classType === "Business") {
    baseFare += 200;
  } else if (classType === "First Class") {
    baseFare += 500;
  }

  const extraLuggageCharge = luggageWeight > 20 ? Math.ceil((luggageWeight - 20) / 10) * 50 : 0;
  baseFare += extraLuggageCharge;

  if (isStudent) {
    baseFare *= 0.85;  // 15% discount for students
  } else if (isSenior) {
    baseFare *= 0.90;  // 10% discount for seniors
  }

  return baseFare;
}
 console.log(calculateFlightFare("economy",45,"true","false"));
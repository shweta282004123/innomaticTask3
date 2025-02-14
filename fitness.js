

//8. Fitness Membership Plan


function choosePlan(planType, wantsTrainer, wantsDietPlan) {
  if (planType === "Basic") {
    return "Basic Plan ($20/month) - Only Gym Access";
  } else if (planType === "Premium") {
    if (wantsTrainer && wantsDietPlan) {
      return "Premium Plan ($50/month) - Gym + Personal Trainer + Diet Plan";
    }
    return "Premium Plan ($50/month) - Gym + Personal Trainer";
  } else if (planType === "VIP") {
    return "VIP Plan ($80/month) - Gym + Personal Trainer + Diet Plan";
  }
  return "Invalid plan type";
}
  console.log(choosePlan("VIP", "true"));
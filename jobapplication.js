//6. Job Application Filter


function isEligibleForJob(age, experience, qualification) {
  if (age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree") {
    return true;
  }
  return false;
}
console.log(isEligibleForJob(34,4,"Bachelor's Degree"))
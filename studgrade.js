
//3. Student Grading System with Extra Credit


function calculateGrade(marks, attendance) {
  if (attendance > 90) {
    marks += 5;  // Add 5 extra marks if attendance is above 90%
  }

  if (marks >= 90) return "A";
  if (marks >= 80) return "B";
  if (marks >= 70) return "C";
  if (marks >= 60) return "D";
  return "F";
}
 console.log(calculateGrade(90,95));
function findAngleType(angle) {
  if (angle > 0 && angle < 90) {
    return "Acute angle";
  } else if (angle === 90) {
    return "Right angle";
  } else if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  } else if (angle === 180) {
    return "Straight angle";
  } else {
    return "Invalid angle";
  }
}

const angle = 75;
console.log(`Angle is a: ${findAngleType(angle)}`);

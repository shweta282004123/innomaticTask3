//4. Smart Traffic Light System

function trafficLightControl(density) {
  if (density === "Heavy Traffic") {
    return 60;  // Green light for 60 seconds
  } else if (density === "Moderate Traffic") {
    return 40;  // Green light for 40 seconds
  } else if (density === "Light Traffic") {
    return 20;  // Green light for 20 seconds
  }
  return 0;  // Default if no valid traffic density is provided
}

  console.log(trafficLightControl("Light Traffic"));
function adjustLights(lights) {
    let redCount = 0;
    let greenCount = 0;
    lights.forEach((light, index) => {
      if (index % 2 === 0)  {
        if (light === "🟢") greenCount++; 
        if (light === "🔴") redCount++;
      } else {
        if (light === "🔴") greenCount++;
        if (light === "🟢") redCount++; 
      }
    });
    return Math.min(redCount, greenCount);
}

const lights = ["🟢", "🔴", "🟢", "🟢", "🟢"];
console.log(adjustLights(lights));

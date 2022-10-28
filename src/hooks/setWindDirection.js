const setWindDirection = (degrees) => {
  const directions = ["N", "NE", "E", "SU", "S", "SO", "O", "NO"];

  degrees = (degrees * 8) / 360;
  degrees = Math.round(degrees, 0);
  degrees = (degrees + 8) % 8;
  return directions[degrees];
};

export default setWindDirection;

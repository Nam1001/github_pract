function timeToSeconds(timeString) {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return (hours * 3600) + (minutes * 60) + seconds;
  }
  
  // Example usage:
  const totalSeconds = timeToSeconds("02:30:45");
  console.log(totalSeconds);  // Output: 9045
  
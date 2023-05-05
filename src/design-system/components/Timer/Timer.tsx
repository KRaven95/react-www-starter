import { useEffect, useState } from "react";

interface TimerProps {
  startTime: number;
}

const Timer: React.FC<TimerProps> = ({ startTime }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(startTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(timeRemaining / (24 * 60 * 60));
  const hours = Math.floor((timeRemaining / (60 * 60)) % 24);
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const seconds = Math.floor(timeRemaining % 60);

  return (
    <div>
      {days}:{hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </div>
  );
};

export default Timer;

import { useEffect, useState } from "react";

export const getTimeLeft = (timestamp: number) => {
  const now = new Date().getTime();
  const timeLeft = timestamp - now;

  // Calculate days, hours, minutes, and seconds left
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return {
    days: daysLeft,
    hours: hoursLeft,
    minutes: minutesLeft,
    seconds: secondsLeft
  };
};

export const timePartAsString = (timePart: number) => {
  return ("0" + timePart).slice(-2);
};

const useTimer = (howLongSeconds: number, stored?: boolean) => {
  const targetTimestampMs = Date.now() + howLongSeconds * 1000 + 2000;

  const [days, setDays] = useState<number | null>(null);
  const [hours, setHours] = useState<number | null>(null);
  const [minutes, setMinutes] = useState<number | null>(null);
  const [seconds, setSeconds] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const { days, hours, minutes, seconds } = getTimeLeft(targetTimestampMs);

      const now = Date.now();
      if (targetTimestampMs < now) {
        clearInterval(interval);
        return;
      }

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
  }, []);

  return { days, hours, minutes, seconds };
};

export default useTimer;

import { useRef, useState, useEffect } from "react";
import useIsMounted from "@library/frontend/hooks/useIsMounted";

interface IDraggableScroll {
  speedMultiplier?: number;
}

const useDraggableScroll = <T extends HTMLElement>({ speedMultiplier = 1 }: IDraggableScroll) => {
  const isMounted = useIsMounted();

  const scrollContainerRef = useRef<T | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const scrollContainer = scrollContainerRef.current;

  // Mouse down handler
  const handleMouseDown = (e: MouseEvent) => {
    if (!scrollContainer) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollContainer.offsetLeft);
    setScrollLeft(scrollContainer.scrollLeft);
  };

  // Mouse move handler
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollContainer) return;

    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * speedMultiplier; // Adjust scroll speed
    scrollContainer.scrollLeft = scrollLeft - walk;
  };

  // Mouse up or leave handler
  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Touch start handler
  const handleTouchStart = (e: TouchEvent) => {
    if (!scrollContainer) return;

    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainer.offsetLeft);
    setScrollLeft(scrollContainer.scrollLeft);
  };

  // Touch move handler
  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !scrollContainer) return;

    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
    const walk = x - startX; // Adjust scroll speed
    scrollContainer.scrollLeft = scrollLeft - walk;
  };

  // Touch end handler
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (!scrollContainer) return;

    // Mouse events
    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mousemove", handleMouseMove);
    scrollContainer.addEventListener("mouseup", handleMouseUpOrLeave);
    scrollContainer.addEventListener("mouseleave", handleMouseUpOrLeave);

    // Touch events
    scrollContainer.addEventListener("touchstart", handleTouchStart);
    scrollContainer.addEventListener("touchmove", handleTouchMove);
    scrollContainer.addEventListener("touchend", handleTouchEnd);
    scrollContainer.addEventListener("touchcancel", handleTouchEnd);

    // Cleanup event listeners on unmount
    return () => {
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
      scrollContainer.removeEventListener("mouseup", handleMouseUpOrLeave);
      scrollContainer.removeEventListener("mouseleave", handleMouseUpOrLeave);

      scrollContainer.removeEventListener("touchstart", handleTouchStart);
      scrollContainer.removeEventListener("touchmove", handleTouchMove);
      scrollContainer.removeEventListener("touchend", handleTouchEnd);
      scrollContainer.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [isDragging, startX, scrollLeft, isMounted]);

  return scrollContainerRef;
};

export default useDraggableScroll;

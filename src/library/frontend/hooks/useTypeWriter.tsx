import { useState, useEffect, useRef, useCallback } from "react";

interface UseTypewriterOptions {
  message: string;
  typingSpeedMs?: number;
}

interface UseTypewriter {
  typedMessage: string;
  complete: () => void;
}

const useTypewriter = ({ message, typingSpeedMs = 100 }: UseTypewriterOptions): UseTypewriter => {
  const [typedMessage, setTypedMessage] = useState<string>("");
  const indexRef = useRef<number>(0);
  const typingTimeoutRef = useRef<number | null>(null);

  const clearTypingTimeout = useCallback(() => {
    if (typingTimeoutRef.current !== null) {
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }
  }, []);

  const getRandomizedTypingSpeed = useCallback(() => {
    const variance = typingSpeedMs * 0.5; // Adjust variance here (50% of base speed)
    return typingSpeedMs + Math.random() * variance - variance / 2;
  }, [typingSpeedMs]);

  const typeNextChar = useCallback(() => {
    if (indexRef.current >= message.length) {
      clearTypingTimeout();
      return;
    }

    setTypedMessage((prev) => prev + message[indexRef.current]);
    indexRef.current += 1;

    typingTimeoutRef.current = window.setTimeout(typeNextChar, getRandomizedTypingSpeed());
  }, [message, clearTypingTimeout, getRandomizedTypingSpeed]);

  useEffect(() => {
    if (!message) return; // Early return if no message provided

    clearTypingTimeout(); // Clear any existing timeout

    indexRef.current = 0; // Reset index for the new message
    setTypedMessage(""); // Reset typed message

    typingTimeoutRef.current = window.setTimeout(typeNextChar, getRandomizedTypingSpeed());

    return clearTypingTimeout; // Cleanup on unmount or message change
  }, [message, typeNextChar, clearTypingTimeout, getRandomizedTypingSpeed]);

  const complete = useCallback(() => {
    clearTypingTimeout();
    setTypedMessage(message);
  }, [message, clearTypingTimeout]);

  return { typedMessage, complete };
};

export default useTypewriter;

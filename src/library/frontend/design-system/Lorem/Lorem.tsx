import React from "react";

type LoremProps = {
  words?: number;
};

const generateLoremText = (words: number): string => {
  const loremWords = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua"
  ];

  // Generate a single string with the specified number of words
  const text = Array.from({ length: words }, () => {
    const randomIndex = Math.floor(Math.random() * loremWords.length);
    return loremWords[randomIndex];
  }).join(" ");

  return text;
};

const Lorem: React.FC<LoremProps> = ({ words = 10 }) => {
  const text = generateLoremText(words);
  return <>{text}</>;
};

export default Lorem;

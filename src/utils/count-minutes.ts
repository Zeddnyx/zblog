export default function countMinutes(text: string): number {
  const wordsPerMinute = 200;

  const wordCount = text.split(/\s+/).length;

  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime;
}

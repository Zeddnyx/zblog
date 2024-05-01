export default function shortName(fullName: string) {
  const words = fullName?.split(" ");
  const initials = words?.map((word, index) => {
    if (index < 2 || words?.length <= 2) {
      return word.charAt(0);
    }
  });
  const short = initials?.join("");
  return short;
}

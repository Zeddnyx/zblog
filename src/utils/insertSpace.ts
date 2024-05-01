export default function insertSpaces(str: string|number, length: number = 4): string {
  const regex = new RegExp(`(.{${length}})`, "g");
  return String(str).replace(regex, "$1 ");
}

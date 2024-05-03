export default function getLastPath(path: string) {
  const pathSegments = path.split("/"); // Split the path into segments
  const lastSegment = pathSegments.pop(); // Get the last segment
  const value = lastSegment?.replace(/^\//, ""); // Remove leading slash and -
  return value;
}

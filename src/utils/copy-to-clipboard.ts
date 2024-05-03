import showMsg from "./showAlert";

export default async function copyToClipboard(text: string, setCopy: any) {
  try {
    await navigator.clipboard.writeText(text);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  } catch (error) {
    showMsg("Error copying to clipboard", "error");
  }
}

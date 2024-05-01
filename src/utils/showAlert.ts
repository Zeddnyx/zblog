import { toast } from "react-hot-toast";

const styles =
  "text-dark-100 dark:text-light-100 bg-light-100 dark:bg-dark-100 z-[9999] *:font-body";
export default function showMsg(
  msg: string,
  type: "success" | "error" | "emoji" | "" = "success",
  emoji?: string,
) {
  type === "" &&
    toast(msg, {
      className: styles,
    });
  type === "success" &&
    toast.success(msg, {
      className: styles,
    });
  type === "error" &&
    toast.error(msg, {
      className: styles,
    });
  type === "emoji" &&
    toast(msg, {
      icon: emoji || "🔥",
    });
}

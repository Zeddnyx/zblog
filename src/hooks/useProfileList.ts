import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { IoIosCard } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { RiQuestionnaireFill } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import { FaLock } from "react-icons/fa";

export const listProfile = [
  {
    name: "Profile",
    path: "profile",
    icon: CgProfile,
  },
  {
    name: "Order History",
    path: "order-history",
    icon: FaHistory,
  },
  {
    name: "Purchase ",
    path: "purchase",
    icon: GiShoppingBag,
  },
  {
    name: "My Cards",
    path: "cards",
    icon: IoIosCard,
  },
  {
    name: "My Wishlist",
    path: "wishlist",
    icon: FaHeart,
  },
  {
    name: "My Reports",
    path: "reports",
    icon: RiErrorWarningFill,
  },
  {
    name: "My Question",
    path: "questions",
    icon: RiQuestionnaireFill,
  },
  {
    name: "Followed Authors",
    path: "followed-merchant",
    icon: IoPeople,
  },
  {
    name: "Password",
    path: "password",
    icon: FaLock,
  },
];

export const listProfileCard = [
  {
    name: "Profile",
    href: "/users/profile",
  },
  {
    name: "Purchase",
    href: "/users/purchase",
  },
  {
    name: "My Whishlist",
    href: "/users/wishlist",
  },
  {
    name: "Followed Authors",
    href: "/users/followed-merchant",
  },
  {
    name: "Password",
    href: "/users/password",
  },
];

import { motion } from "framer-motion";
import { RxDotFilled } from "react-icons/rx";
import Link from "next/link";

import { IBlog } from "@/types";
import countMinutes from "@/utils/count-minutes";

export default function Heading({ content, title, slug }: IBlog) {
  return (
    <Link href={`/${slug}`} className="grid grid-cols-1 md:grid-cols-2 [&>*]:text-light-200">
      <motion.div
        className="p-5 flex flex-col gap-2 justify-center order-2 md:order-1"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.3,
          },
        }}
        viewport={{ once: false }}
      >
        <div className="flex gap-2 relative">
          <p className="font-medium">Most Popular Blog</p>
          <RxDotFilled className="text-dark-200 mt-1 size-4" />
          <p>{countMinutes(content)} min read</p>
        </div>
        <h1 className="line-clamp-3">{title}</h1>
        <p className="line-clamp-3 mt-1">{content}</p>
      </motion.div>
      <motion.div
        className="w-full h-[calc(100vh-580px)] md:h-[calc(100vh-280px)] bg-dark-200 rounded-bl-xl order-1 md:order-2"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.5,
          },
        }}
        viewport={{ once: false }}
      >
        image
      </motion.div>
    </Link>
  );
}

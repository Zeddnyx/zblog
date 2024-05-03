import Link from "next/link";
import { BiComment } from "react-icons/bi";

import { IBlog } from "@/types";
import countMinutes from "@/utils/count-minutes";

export default function CardBlog({ ...props }: IBlog) {
  const { content, title, slug, comments } = props;
  return (
    <Link href={`/${slug}`} className="card-blog">
      <h3 className="line-clamp-3 text-2xl">{title}</h3>
      <p className="line-clamp-3">{content}</p>
      <div className="flex items-center gap-5 [&>*]:text-sm [&>*]:flex [&>*]:gap-1 [&>*]:items-center">
        <p>{countMinutes(content)} min read</p>
        <p>
          {comments} <BiComment />{" "}
        </p>
      </div>
    </Link>
  );
}

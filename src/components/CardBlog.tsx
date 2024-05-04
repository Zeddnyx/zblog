import Link from "next/link";
import { FaRegCommentAlt } from "react-icons/fa";

import Tag from "./Tag";
import { IBlog } from "@/types";

import countMinutes from "@/utils/count-minutes";

export default function CardBlog({ ...props }: IBlog) {
  const { content, title, slug, comments, category } = props;
  const categoryArr = category.split(" ");

  return (
    <div className="card-blog">
      <Link href={`/${slug}`} className="">
        <h3 className="line-clamp-3 text-2xl hover:text-brand">{title}</h3>
      </Link>
      <Tag category={categoryArr} />
      <div className="mt-2 flex justify-between items-center gap-5 [&>*]:text-sm [&>*]:flex [&>*]:gap-1 [&>*]:items-center *:font-support">
        <p>
          <FaRegCommentAlt />{" "}
          {comments == 0 ? "Add Comment" : `${comments} comments`}
        </p>
        <p className="text-[12px]">{countMinutes(content)} min read</p>
      </div>
    </div>
  );
}

import { useRouter } from "next/router";

import randomColor from "@/utils/random-colors";

export default function Tag({
  category,
  isDisabled = false,
}: {
  category: string[];
  isDisabled?: boolean;
}) {
  const { push, query } = useRouter();
  const { category: categoryQuery } = query;

  const handleClick = (item: string) => {
    isDisabled ? null : push({ query: { category: item } });
  };

  return (
    <div className="flex gap-2">
      {category?.map((item, id) => {
        return (
          <button
            key={id}
            type="button"
            onClick={() => handleClick(item)}
            className={`line-clamp-1 text-sm lowercase text-light-300 p-0.5 hover:bg-brand/10 border hover:border-brand/40 rounded-md
            ${
              categoryQuery === item
                ? "bg-brand/10 border-brand/40"
                : "border-dark-300"
            }
            `}
          >
            <span style={{ color: `#${randomColor()}` }}>#</span>
            {item}
          </button>
        );
      })}
    </div>
  );
}

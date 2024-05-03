import CardBlog from "@/components/CardBlog";
import Heading from "@/components/Heading";
import { IBlog } from "@/types";

export default function Home() {
  return (
    <main className="">
      <Heading
        title={dummyBlogs[0].title}
        slug={dummyBlogs[0].slug}
        content={dummyBlogs[0].content}
        category={dummyBlogs[0].category}
      />
      <div className="max-w-all mt-10">
        <h2 className="font-semibold xl:text-4xl">Latest</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {dummyBlogs.map((item, id) => {
            return <CardBlog key={id} {...item} />;
          })}
        </div>
      </div>
    </main>
  );
}

const dummyBlogs: IBlog[] = [
  {
    title: "Lorem ipsum dolor sit amet, officia excepteur",
    content:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    slug: "most-popular-blog",
    category: "Most Popular",
    comments: 10,
  },
  {
    title: "Lorem ipsum dolor sit amet, officia excepteur",
    content:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    slug: "most-popular-blog",
    category: "Most Popular",
    comments: 10,
  },
  {
    title: "Lorem ipsum dolor sit amet, officia excepteur",
    content:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    slug: "most-popular-blog",
    category: "Most Popular",
    comments: 10,
  },
  {
    title: "Lorem ipsum dolor sit amet, officia excepteur",
    content:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    slug: "most-popular-blog",
    category: "Most Popular",
    comments: 10,
  },
  {
    title: "Lorem ipsum dolor sit amet, officia excepteur",
    content:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    slug: "most-popular-blog",
    category: "Most Popular",
    comments: 10,
  },
  {
    title: "Lorem ipsum dolor sit amet, officia excepteur",
    content:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    slug: "most-popular-blog",
    category: "Most Popular",
    comments: 10,
  },
  {
    title: "Lorem ipsum dolor sit amet, officia excepteur",
    content:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    slug: "most-popular-blog",
    category: "Most Popular",
    comments: 10,
  },
  {
    title: "Lorem ipsum dolor sit amet, officia excepteur",
    content:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    slug: "most-popular-blog",
    category: "Most Popular",
    comments: 10,
  },
  {
    title: "Lorem ipsum dolor sit amet, officia excepteur",
    content:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    slug: "most-popular-blog",
    category: "Most Popular",
    comments: 10,
  },
];

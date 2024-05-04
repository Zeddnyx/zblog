import Tag from "@/components/Tag";
import LayoutDetail from "@/layout/LayoutDetail";

export default function Detail() {
  const category = ["category1", "category2", "category3"];
  return (
    <LayoutDetail>
      <div className="h-[calc(100vh-700px)] md:h-[calc(100vh-300px)] w-full bg-red-200"></div>
      <div className="max-w-all p-10 md:p-16">
        <h1 className="text-3xl lg:text-4xl">Blog Details</h1>
        <Tag category={category} isDisabled />
        <br/>
        <br/>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        </p>
        <br/>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        </p>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        </p>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        </p>
      </div>
    </LayoutDetail>
  );
}

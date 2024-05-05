import Tag from "@/components/Tag";
import LayoutDetail from "@/layout/LayoutDetail";
import Comment from "@/components/Comment";
import InputArea from "@/components/InputArea";
import { useState } from "react";
import Button from "@/components/Button";

export default function Detail() {
  const category = ["category1", "category2", "category3"];
  const [comment, setComment] = useState("");

  return (
    <LayoutDetail>
      <div className="h-[calc(100vh-700px)] md:h-[calc(100vh-70%)] w-full bg-red-200"></div>
      <div className="max-w-all p-10 md:p-16">
        <h1 className="text-3xl lg:text-4xl">Blog Details</h1>
        <Tag category={category} isDisabled />
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        </p>
        <br />
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
        <div className="mt-16">
          <InputArea
            placeholder="Add to the discussion"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <div className={`${comment ? "opacity-100" : "opacity-0 invisible"} transition-all duration-300`}>
            <Button text="Submit" />
          </div>
          <Comment />
        </div>
      </div>
    </LayoutDetail>
  );
}

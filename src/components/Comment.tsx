import React from "react";

export default function MainComment() {
  const comments = [
    {
      id: 1,
      user: { name: "John", avatar: "john.jpg" },
      text: "This is a top-level comment.",
      replies: [
        {
          id: 2,
          user: { name: "Alice", avatar: "alice.jpg" },
          text: "This is a reply to the top-level comment.",
          replies: [
            {
              id: 3,
              user: { name: "Bob", avatar: "bob.jpg" },
              text: "This is a reply to a reply.",
              replies: [],
            },
          ],
        },
        {
          id: 4,
          user: { name: "Asep", avatar: "alice.jpg" },
          text: "This is a reply to the second-level comment.",
          replies: [],
        },
      ],
    },
  ];

  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

function Comment({ comment }: { comment: any }) {
  return (
    <div className="p-4 mb-4">
      <div className="flex items-center mb-2">
        <div className="size-10 bg-brand rounded-full" />
        <span className="font-bold text-light">{comment.user.name}</span>
      </div>
      <p>{comment.text}</p>
      {comment.replies &&
        comment.replies.map((reply: any) => (
          <div key={reply.id} className="ml-8">
            <Comment comment={reply} />
          </div>
        ))}
    </div>
  );
}

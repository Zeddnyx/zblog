export default function LayoutDetail({ children }: any) {
  return (
    <div className="relative flex">
      <div className="w-[calc(100svw-100px)] h-full bg-brand">
        <div className="w-80">
          <p>comment</p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

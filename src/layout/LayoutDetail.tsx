export default function LayoutDetail({ children }: any) {
  return (
    <div className="relative flex max-w-all">
      <div className="w-80 h-full bg-brand">
        <div>
          <p>comment</p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

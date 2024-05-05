import { IInput } from "@/types/form";

export default function InputArea({ ...props }: IInput) {
  const { error } = props;
  return (
    <div>
      <textarea {...props} className="w-full p-2 rounded-md outline-none bg-transparent text-light-300 border border-light-300 focus:border-brand" />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

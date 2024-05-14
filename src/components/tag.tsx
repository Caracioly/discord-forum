type TagProps = {
  label: string;
}

export function Tag({ label }: TagProps) {
  return (
    <div className="rounded-lg bg-gray-input p-2 ml-1 hover:bg-gray-400 hover:cursor-pointer">
      <h1 className="text-white text-[12px] font-extralight">#{label}</h1>
    </div>
  );
}

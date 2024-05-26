import { Spinner } from "@radix-ui/themes";

export default function Loading() {
  return (
    <div className="flex p-1.5 justify-center">
      <Spinner size="1" />
    </div>
  );
}

import { BsX } from "react-icons/bs";

import { ToastType } from "@/types/toast";

export function Toast({ title, description, color, close }: ToastType) {
  return (
    <main className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-main rounded-md select-none mt-2 toast-animation">
      <section className="flex justify-stretch">
        <div className={`${color} rounded-l-md p-2`} />
        <div className="font-sans p-2">
          <h1 className="text-white">{title}</h1>
          <p className="text-gray">{description}</p>
        </div>
        <div>
          <BsX
            className="hover:bg-gray rounded-md"
            onClick={close}
            size={20}
            color="white"
          />
        </div>
      </section>
    </main>
  );
}

import { IoChatbubble } from "react-icons/io5";
import { Tag } from "@/components/tag";

type PostContainerProps = {
  postTitle: string;
  postContent: string;
  postImg?: string;
};

export function PostContainer({
  postTitle,
  postContent,
  postImg,
}: PostContainerProps) {
  return (
    <div className="flex flex-col bg-gray-container rounded-lg p-2 hover:drop-shadow-2xl hover:shadow-black hover:-translate-y-1 hover:transition-shadow duration-600 overflow-hidden text-nowrap h-fit">
      <div className="flex-row flex mb-1">
        <Tag label="remote" />
        <Tag label="front-end" />
      </div>
      <div className="flex flex-col border-t border-gray-input p-2">
        <div className="flex gap-x-3 mt-1 items-center">
          <h1 className="text-gray font-semibold ">@PostAutor</h1>
          <h1 className="text-gray font-thin text-sm">Há 4h</h1>
        </div>
        <h1 className="text-xl text-white font-semibold truncate">
          {postTitle}
        </h1>
        <div className="flex flex-row py-2 ">
          <h1 className="text-gray font-thin text-pretty line-clamp-3">
            {postContent}
          </h1>
          {postImg && (
            <div className="ml-2">
              <img className="rounded-lg" src={postImg} alt="post-img" />
            </div>
          )}
        </div>
        <div className="flex flex-row rounded-lg bg-gray-input p-2 items-center">
          <IoChatbubble color="#bbbdbe" />
          <h1 className="ml-2 text-gray truncate">
            User: Olá Gabriel. Ja existe um protótipo do que voces querem ?
          </h1>
        </div>
      </div>
    </div>
  );
}
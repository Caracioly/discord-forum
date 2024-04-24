import { PostContainer } from "../components/post-container";

export default function Home() {
  return (
    <div className="w-full bg-[#282A2E] flex justify-center p-4">
      <div className="grid grid-row-5 gap-4 w-[70%]">
        <PostContainer
          postTitle={"Procura-se Dev Freelancer Front-end Fullstack"}
          postContent="natus error sit voluptatem accusantium doloremque laudantium, totam rem"
        ></PostContainer>
        <PostContainer
          postTitle={"Procura-se Dev Freelancer Front-end Fullstack"}
          postContent="Prazer, meu nome é Gabriel e estou querendo programadores para criação... de um site de vendas! Vamos trabalhar com Dropshipping direto estamos atualmente com esse projeto"
          postImg="https://media.discordapp.net/attachments/1232409845211336758/1232409845358002217/Captura_de_tela_2024-04-22_215909.png?ex=662a035c&is=6628b1dc&hm=8c740dc48ad41d618a05cb3f5432cd66a37e260626e2188e123f9593b41f8825&.png"
        ></PostContainer>
        <PostContainer
          postTitle={"Procura-se Dev Freelancer Front-end Fullstack"}
          postContent="eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis"
        ></PostContainer>
        <PostContainer
          postTitle={"Procura-se Dev Freelancer Front-end Fullstack"}
          postContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
        ></PostContainer>
        <PostContainer
          postTitle={"Procura-se Dev Freelancer Front-end Fullstack"}
          postContent="natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum"
        ></PostContainer>
      </div>
    </div>
  );
}

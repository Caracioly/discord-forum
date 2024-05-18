import { PostContainer } from "@/components/post-container";

export default function Home() {
  return (
    <div className="w-full bg-gray-main flex justify-center p-4">
      
      <div className="grid grid-row gap-4 md:w-[70%] sm:w-[90%] 2xl:w-[50%] lg:w-[60%] xl:w-[80%]">
        <PostContainer
          postTitle={"Procura-se Dev Freelancer Front-end Fullstack"}
          postContent="natus error sit voluptatem accusantium doloremque laudantium, totam rem"
        ></PostContainer>
        <PostContainer
          postTitle={"Procura-se Dev Freelancer Front-end Fullstack trabalho remoto bem."}
          postContent="Prazer, meu nome é Gabriel e estou querendo programadores para criação... de um site de vendas! Vamos trabalhar com Dropshipping direto estamos atualmente com esse projeto"
        ></PostContainer>
        <PostContainer
          postTitle={"Procura-se Dev Freelancer Front-end Fullstack"}
          postContent="eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis"
        ></PostContainer>
        <PostContainer
          postTitle={"Procura-se Dev Freelancer Front-end Fullstack"}
          postContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
          postImg="https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg?w=996&t=st=1713978921~exp=1713979521~hmac=1e4e0689939b4288e7fc16fd766c24afd0077f19f8d2e525ae3201f443497c06.png"
        ></PostContainer>
        <PostContainer
          postTitle={"Procura-se Dev Freelancer Front-end Fullstack"}
          postContent="natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum"
          postImg="https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg"
        ></PostContainer>
        <PostContainer
          postTitle={"Procura-se Dev Freelancer "}
          postContent="natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum"
          postImg="https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
        ></PostContainer>
      </div>
    </div>
  );
}

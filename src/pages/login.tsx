import { Link } from "react-router-dom";
import { LoginInput } from "../components/login-input";

export default function Login() {
  return (
    <div className="w-full h-screen bg-[#282A2E] relative">
      <img
        src="https://images.alphacoders.com/129/thumb-1920-1291249.png"
        alt="background"
        className="w-full h-full object-cover"
      />

      <div className="absolute bg-[#313338] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md p-4">
        <div className="flex flex-col justify-center items-center p-4 select-none">
          <h1 className="text-white text-xl font-bold">
            Boas-vindas de volta!
          </h1>
          <h2 className="text-[#bbbdbe] text-lg">
            Estamos muito animados em te ver novamente!
          </h2>
          <div className="flex flex-col w-[80%] gap-1 mt-4">
            <h1 className="text-[#bbbdbe] font-semibold">
              E-mail
              <span className="text-[#F23F42] ml-1">*</span>
            </h1>
            <LoginInput type="email"></LoginInput>
          </div>
          <div className="flex flex-col w-[80%] gap-1 mt-4">
            <h1 className="text-[#bbbdbe] font-semibold">
              Senha
              <span className="text-[#F23F42] ml-1">*</span>
            </h1>
            <LoginInput type="password"></LoginInput>
            <button className="text-[#0896DE] font-bold text-sm mt-1 self-start hover:underline">
              Esqueceu sua senha?
            </button>
            <Link
              className="text-white font-bold bg-[#4752C4] w-full p-2 rounded-md mt-4 text-center hover:bg-[#656dc9]"
              to="/home"
            >
              Entrar
            </Link>
            <h1 className="text-sm text-[#8e9192]">
              Precisando de uma conta?
              <button className="text-[#0896DE] font-bold text-sm mt-1 self-start hover:underline ml-2">
                Registre-se
              </button>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

import { LoginInput } from "@/components/login-input";
import { LoginButton } from "@/components/login-button";

export default function Login() {
  return (
    <div className="w-full h-screen bg-gray-main relative">
      <img
        src="https://images.alphacoders.com/129/thumb-1920-1291249.png"
        alt="background"
        className="w-full h-full object-cover"
      />
      <div className="absolute bg-gray-container top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md p-4">
        <div className="flex flex-col justify-center items-center p-4 select-none">
          <h1 className="text-white text-xl font-bold">
            Boas-vindas de volta!
          </h1>
          <h2 className="text-gray text-lg">
            Estamos muito animados em te ver novamente!
          </h2>
          <div className="flex flex-col w-[80%] gap-1 mt-4">
            <h1 className="text-gray font-semibold">
              E-mail
              <span className="text-red ml-1">*</span>
            </h1>
            <LoginInput type="email"></LoginInput>
          </div>
          <div className="flex flex-col w-[80%] gap-1 mt-4">
            <h1 className="text-gray font-semibold">
              Senha
              <span className="text-red ml-1">*</span>
            </h1>
            <LoginInput type="password"></LoginInput>
            <button className="text-light-blue font-bold text-sm mt-1 self-start hover:underline">
              Esqueceu sua senha?
            </button>
            <LoginButton
            path="/home"
            inputText="Entrar"
            />
            <h1 className="text-sm text-gray">
              Precisando de uma conta?
              <button className="text-light-blue font-bold text-sm mt-1 self-start hover:underline ml-2">
                Registre-se
              </button>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

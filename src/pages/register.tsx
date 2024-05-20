import { Link } from "react-router-dom";
import { useState } from "react";

import { DateSelector } from "@/components/Date-Selector/index";
import { LoginButton } from "@/components/login-button";
import { LoginInput } from "@/components/login-input";

export default function Register() {
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  return (
    <div className="w-full h-screen bg-gray-main relative">
      <img
        src="https://images.alphacoders.com/129/thumb-1920-1291249.png"
        alt="background"
        className="w-full h-full object-cover"
      />
      <div className="absolute bg-gray-container top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md p-4 w-[26rem]">
        <div className="flex flex-col justify-center items-center p-4 select-none">
          <h1 className="text-white text-xl font-bold">Criar uma Conta</h1>
          <div className="flex flex-col w-[80%] gap-2 mt-4">
            <h1 className="text-gray font-semibold">
              E-mail
              <span className="text-red ml-1">*</span>
            </h1>
            <LoginInput type="email"></LoginInput>
            <h1 className="text-gray font-semibold">
              Nome de Usuário
              <span className="text-red ml-1">*</span>
            </h1>
            <LoginInput type="text"></LoginInput>
            <h1 className="text-gray font-semibold">
              Senha
              <span className="text-red ml-1">*</span>
            </h1>
            <LoginInput type="password"></LoginInput>
            <h1 className="text-gray font-semibold">
              Data de Nascimento
              <span className="text-red ml-1">*</span>
            </h1>
            <DateSelector.Root>
              <DateSelector.Day value={selectedDay} setValue={setSelectedDay} />
              <DateSelector.Month
                value={selectedMonth}
                setValue={setSelectedMonth}
              />
              <DateSelector.Year
                value={selectedYear}
                setValue={setSelectedYear}
              />
            </DateSelector.Root>
            <LoginButton 
            //to="/home" 
            inputText="Continuar" />
          </div>
          <h1 className="text-sm text-gray">
            Já tem uma conta?
            <Link
              className="text-light-blue font-bold text-sm mt-1 self-start hover:underline ml-2"
              to="/"
            >
              Entrar
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { FormData } from "@/types/register";

import { DateSelector } from "@/components/Date-Selector/index";
import { LoginButton } from "@/components/login-button";
import { LoginInput } from "@/components/login-input";

import { validateForm } from "@/utils/register/form-validation";

import { Api } from "@/services/api";

import { useToast } from "@/context/Toast/useToast";

export default function Register() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    selectedDay: "1",
    selectedMonth: "1",
    selectedYear: "2024",
    email: "",
    userTag: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const toast = useToast();

  const navigate = useNavigate();

  async function onFinish() {
    const validation = validateForm(formData);
    if (!validation.valid) {
      setError(validation.message);
      return;
    }
    try {
      await Api.post("users", {
        email: formData.email,
        password: formData.password,
        userTag: formData.userTag,
        birthDate: `${formData.selectedYear}-${formData.selectedMonth}-${formData.selectedDay}`,
      });

      toast?.open("Sucess!", "Your account has been created!", "bg-green-600");

      navigate("/");
    } catch (err: any) {
      setError(err.response.data.message || "Something went wrong. Try again.");
    } finally {
      setIsLoading(false);
    }
  }

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
            <LoginInput
              autoComplete="email"
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <h1 className="text-gray font-semibold">
              Nome de Usuário
              <span className="text-red ml-1">*</span>
            </h1>
            <LoginInput
              id="userTag"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, userTag: e.target.value })
              }
            />
            <h1 className="text-gray font-semibold">
              Senha
              <span className="text-red ml-1">*</span>
            </h1>
            <LoginInput
              id="password"
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <h1 className="text-gray font-semibold">
              Data de Nascimento
              <span className="text-red ml-1">*</span>
            </h1>
            <DateSelector.Root>
              <DateSelector.Day
                setValue={(value) =>
                  setFormData({ ...formData, selectedDay: value })
                }
              />
              <DateSelector.Month
                setValue={(value) =>
                  setFormData({ ...formData, selectedMonth: value })
                }
              />
              <DateSelector.Year
                setValue={(value) =>
                  setFormData({ ...formData, selectedYear: value })
                }
              />
            </DateSelector.Root>
            {error && (
              <span className="text-red text-sm mt-1 self-start">{error}</span>
            )}
            <LoginButton
              isLoading={isLoading}
              onClick={onFinish}
              inputText="Continuar"
            />
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

import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Lock, User } from "phosphor-react";
import { FormEvent, useContext, useState } from "react";
import logoWithLine from "../../public/logoWithLine.svg";
import { Input } from "../components/Form/Input";
import { AuthContext } from "../contexts/AuthContext";
import { toast, ToastContainer } from 'react-toastify';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  async function handleLogin(evt: FormEvent) {
    evt.preventDefault();

    try {
      await signIn({
        email,
        password
      });
    } catch (error) {
      toast.error("Email ou senha incorretos.");
    }
  }

  return (
    <>
      <Head>
        <title>Dashboard IFOscar | Login</title>
      </Head>
      <div className="w-full h-screen overflow-auto flex flex-col-reverse md:flex-row">
        <ToastContainer 
          theme="colored" 
          toastClassName="errorAlert"
          autoClose={2000} 
          pauseOnHover={false} 
        />
        <div className="md:w-[53%] h-full p-2 bg-gradient-to-br from-blue-350 via-blue-450 to-purple-750 flex flex-col justify-between">
          <h1 className="text-5xl font-medium text-white ml-12 mt-32">
            Dashboard
          </h1>
          <div className="w-full flex items-end justify-end">
            <Image src={logoWithLine} alt="" />
          </div>
        </div>
        <div className="md:w-[47%] h-full p-2 bg-gray-950 flex flex-col items-center">
          <div className="mt-24">
            <Image src={logoWithLine} alt="" />
          </div>
          <form 
            onSubmit={handleLogin}
            method="post"
            className="flex flex-col items-center mt-24 gap-5"
          >
            <Input 
              placeholder="Email"
              name="email"
              type="email"
              icon={<User size={19} className="text-gray-350" weight="fill" />} 
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
            />
            <Input
              placeholder="Password"
              name="password"
              type="password" 
              icon={<Lock size={19} className="text-gray-350" weight="fill" />} 
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />

            <button
              className="mt-3 mb-10 w-48 h-14 flex justify-center items-center rounded-md bg-gradient-to-r from-blue-350 to-purple-750 text-xl text-white hover:brightness-90 transition" 
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  )
}


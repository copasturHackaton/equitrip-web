import Head from "next/head";
import styles from "@/styles/Signin.module.scss";
import { GlobalContext } from "@/context/queryContext";
import { FormEvent, useContext } from "react";
import Image from "next/image";

export default function SignIn() {
  const { loginHandler, loginLoading } = useContext(GlobalContext);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { email, password } = document.forms[0] as any;

    loginHandler({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <>
      <Head>
        <title>Equitrip - Login</title>
        <meta name="description" content="Equitrip viagens" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <main className={styles.signin}>
        <form onSubmit={handleSubmit}>
          <Image src="/logo.png" alt="" width={360} height={89} />
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" name="email" />
          </div>
          <div>
            <label htmlFor="email">Senha</label>
            <input type="text" placeholder="******" name="password" />
          </div>
          <button onClick={(e) => handleSubmit(e)}>
            {loginLoading ? "Carregando..." : "Logar"}
          </button>
        </form>
      </main>
      <footer></footer>
    </>
  );
}

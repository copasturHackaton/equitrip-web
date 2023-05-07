import Head from "next/head";
import styles from "@/styles/Signup.module.scss";
import { FormEvent, useContext } from "react";
import { GlobalContext } from "@/context/queryContext";

export default function SignIn() {
  const { signUpHandler, signUpLoading, signUpError } =
    useContext(GlobalContext);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { name, email, password, race, birthday, gender, disabilities } =
      document.forms[0] as any;

    signUpHandler({
      name: name.value,
      email: email.value,
      password: password.value,
      race: race.value,
      birthday: birthday.value,
      gender: gender.value,
      disabilities: disabilities.value,
    });
  };
  return (
    <>
      <Head>
        <title>Equitrip - Cadastro</title>
        <meta name="description" content="Equitrip viagens" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <main className={styles.signup}>
        <form onSubmit={handleSubmit}>
          <picture>
            <img src="logo.png" alt="" />
          </picture>
          <div>
            <label htmlFor="name">Nome completo</label>
            <input
              required
              type="text"
              placeholder="Nome Completo"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input required type="text" placeholder="Email" name="email" />
          </div>
          <div>
            <label htmlFor="email">Data de nascimento</label>
            <input required type="date" name="birthday" />
          </div>
          <div>
            <label htmlFor="genero">Gênero</label>
            <input required type="text" placeholder="Gênero" name="gender" />
          </div>
          <div>
            <label htmlFor="race">Raça</label>
            <input required type="text" placeholder="Raça" name="race" />
          </div>
          <div>
            <label htmlFor="deficiencia">Deficiências</label>
            <input
              required
              type="text"
              placeholder="Deficiencia"
              name="deficiencia"
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              required
              type="password"
              placeholder="******"
              name="password"
            />
          </div>
          <button type="submit">
            {signUpLoading ? "Carregando..." : "Cadastrar"}
          </button>
        </form>
      </main>
      <footer></footer>
    </>
  );
}

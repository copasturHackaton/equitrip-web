import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter();

  return (
    <>
      <Head>
        <title>Equitrip</title>
        <meta name="description" content="Equitrip viagens" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.home}>
        <section className={styles.hero}>
          <div className={styles.textContainer}>
            <h1>
              Está pronto para <b>explorar</b> hoje?
            </h1>
            <p>
              Nós acreditamos que cada viajante é único e merece uma experiência
              personalizada, livre de preconceitos e estereótipos. Deixe a
              Equitrip ajudá-lo a planejar a viagem dos seus sonhos, com
              autenticidade, inclusão e respeito pela diversidade.
            </p>
            <button onClick={() => push("/signup")}>Quero experimentar</button>
          </div>
          <div className={styles.imgContainer}>
            <img src="banner.png" alt="" />
          </div>
        </section>
        <section className={styles.partners}>
          <div className={styles.wrapper}>
            <div className={styles.textContainer}>
              <p>
                Nossos parceiros
                <br /> em busca de uma sociedade
                <br /> mais <b>diversa</b> e <b>inclusiva</b>
              </p>
            </div>
            <div className={styles.imageContainer}>
              <img src="partners.png" alt="" />
            </div>
          </div>
        </section>
        <section className={styles.experiences}>
          <h2>
            Compartilhe <br />
            suas <br />
            experiencias!
          </h2>
          <div className={styles.cardContainer}>
            <div className={styles.cardItem}>
              <img src="locationBA.png" alt="" />
              <p className={styles.title}>São Paulo</p>
              <p className={styles.description}>
                10 Lugares que você nao pode perder no Brasil.
              </p>
            </div>
            <div className={styles.cardItem}>
              <img src="locationSC.png" alt="" />
              <p className={styles.title}>Rio de Janeiro</p>
              <p className={styles.description}>
                Experiências gastronomicas no Japão.
              </p>
            </div>
            <div className={styles.cardItem}>
              <img src="locationSP.png" alt="" />
              <p className={styles.title}>Bahia</p>
              <p className={styles.description}>
                Você realmente conhece o Rio de Janeiro?
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>Equitrip.vercel.app - Todos os direitos reservados</p>
      </footer>
    </>
  );
}

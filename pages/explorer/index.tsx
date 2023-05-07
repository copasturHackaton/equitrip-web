import Head from "next/head";
import styles from "@/styles/Experience.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TrailsTab from "@/components/Trails";
import Header from "@/components/Header";
import ExperiencesTab from "@/components/Experiences";


export default function Experience() {
  const router = useRouter();
  const { query } = router;

  const [mode, setMode] = useState<"trilhas" | "experiencias">("trilhas");

  const setQuery = (s: "trilhas" | "experiencias") => router.push({ query: `mode=${s}` })
  
  useEffect(() => {
    if (query.mode === "trilhas") {
      setMode("trilhas");
    }

    if (query.mode === "experiencias") {
      setMode("experiencias");
    }
  }, [query]);

  return (
    <>
      <Head>
        <title>Equitrip - Explorar</title>
        <meta name="description" content="Equitrip viagens" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.experience}>
        <div className={styles.toogleContainer}>
          <button onClick={()=> setQuery('trilhas')} className={`${mode === 'trilhas' ? styles.active : ''}`}>Trilhas</button>
          <button onClick={()=> setQuery('experiencias')} className={`${mode === 'experiencias' ? styles.active : ''}`}>Experiencias</button>
        </div>
        {mode === "trilhas" ? <TrailsTab /> : <ExperiencesTab />}
      </main>
    </>
  );
}

import Image from "next/image";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const { push } = useRouter();

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.wrapper}>
          <Image
            src="/logo.png"
            alt=""
            width={360}
            height={89}
            onClick={() => push("/")}
          />
          <ul>
            <li>
              <a href="">Criar trilha</a>
            </li>
            <li>
              <Link href="/explorer">Explorar</Link>
            </li>
          </ul>
          <div>
            <button onClick={() => push("/signin")}>Logar</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

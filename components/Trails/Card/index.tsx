import type { Trail } from "@/types/trail";
import styles from "../styles.module.scss";
import { useRouter } from "next/router";

interface IProps {
  data: Trail;
}

const TrailCard = (props: IProps) => {
  const { data } = props;
  const { push } = useRouter();

  if (!data || !data.experiences) return null;

  return (
    <div className={styles.cardContainer} >
      <div className={styles.description}>
              <picture>
                  
        <img src={data?.imagesLinks?.[0]} alt="" />
        </picture>
        <div className={styles.flex}>
          <div>
            <p>Criado por: Nome do maluco</p>
            <button className={styles.seeMore} onClick={() => push(`/explorer/trail/${data._id}`)}>Ver mais</button>
          </div>
          <div>
            <p className={styles.title}>{data.title}</p>
            <div className={styles.locationsContainer}>
              {data?.experiences?.map((experience, i) => (
                <p key={i} className={styles.locations}>
                  {experience?.location?.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailCard;

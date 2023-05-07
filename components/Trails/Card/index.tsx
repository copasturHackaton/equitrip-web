import type { Trail } from "@/types/trail";
import styles from "../styles.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";

interface IProps {
  data: Trail;
}

const TrailCard = (props: IProps) => {
  const { data } = props;
  const { push } = useRouter();

  if (!data || !data.experiences) return null;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.description}>
        <picture>
          <img src={data?.imagesLinks?.[0]} alt="" />
        </picture>
        <div className={styles.flex}>
          <div>
            <p>
              Criado por: {data?.author?.name ? data?.author?.name : "Renata"}
            </p>
            <p>Mulher - Negra - LGBTQIA</p>
            <button
              className={styles.seeMore}
              onClick={() => push(`/explorer/trail/${data._id}`)}
            >
              Ver mais
            </button>
          </div>
          <div>
            <p className={styles.title}>{data.title}</p>
            <div className={styles.locationsContainer}>
              {data?.experiences?.map((experience, i) => (
                <div key={i}>
                  <p className={styles.locations}>
                    {experience?.location?.name}
                  </p>
                  |
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.rate}>Pontos: 100</div>
        <div className={styles.flexVote}>
          <div className={styles.upVote}>
            <Image src="/iconUpvote.png" alt="" width={20} height={20} />
          </div>
          <div className={styles.downVote}>
            <Image src="/iconDownVote.png" alt="" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailCard;

import { GlobalContext } from "@/context/queryContext";
import { useContext, useEffect } from "react";
import TrailCard from "./Card";

const trailsDataMock = {
  count: 2,
  trails: [
    {
      _id: "094e9966-8bcc-430b-9ec6-dc486115b464",
      authorId: "79a8b1ae-36c7-4e59-bf51-d2e5f5a32a7a",
      experiences: [
        {
          _id: "eb9c8c39-3b43-4aba-ad3a-9d4f7c049a0a",
          authorId: "79a8b1ae-36c7-4e59-bf51-d2e5f5a32a7a",
          location: {
            _id: "c2f4b97d-7551-453b-b8e5-9e6ad8ab6fa6",
            authorId: "79a8b1ae-36c7-4e59-bf51-d2e5f5a32a7a",
            name: "Museu Pelé",
            description:
              "Museu Pelé é um museu na cidade de Santos, dedicado à carreira do ex-jogador Pelé. Foi inaugurado em 15 de junho de 2014, como parte dos eventos paralelos à Copa do Mundo FIFA de 2014. Sua construção chegou a ser contestada por conta dos altíssimos valores envolvidos nas obras.",
            imagesLinks: [
              "https://pt.wikipedia.org/wiki/Museu_Pel%C3%A9#/media/Ficheiro:Alckmin_prestigia_inaugura%C3%A7%C3%A3o_do_Museu_Pel%C3%A9_em_Santos._(14251151820).jpg",
            ],
            latitude: "-23.9312259",
            longitude: "-46.3352035",
            zipCode: "11010-260",
            number: "1",
            mapsLink: "https://goo.gl/maps/HyrJuNmpq9hUcK1ZA",
            accessibility: ["ELEVATOR"],
            createdAt: "2023-05-06T22:30:27.162Z",
            updatedAt: "2023-05-06T22:30:27.162Z",
            __v: 0,
          },
          title: "Experiência histórica!",
          description:
            "Museu Pelé é um museu na cidade de Santos, dedicado à carreira do ex-jogador Pelé. Foi inaugurado em 15 de junho de 2014, como parte dos eventos paralelos à Copa do Mundo FIFA de 2014. Sua construção chegou a ser contestada por conta dos altíssimos valores envolvidos nas obras.",
          timeDuration: 1,
          timeDurationUnit: "HOURS",
          imagesLinks: [
            "https://pt.wikipedia.org/wiki/Museu_Pel%C3%A9#/media/Ficheiro:Alckmin_prestigia_inaugura%C3%A7%C3%A3o_do_Museu_Pel%C3%A9_em_Santos._(14251151820).jpg",
          ],
          createdAt: "2023-05-06T22:30:27.534Z",
          updatedAt: "2023-05-06T22:30:27.534Z",
          __v: 0,
        },
        {
          _id: "715acd8c-7031-432f-a203-f4d944293582",
          authorId: "79a8b1ae-36c7-4e59-bf51-d2e5f5a32a7a",
          location: {
            _id: "c2f4b97d-7551-453b-b8e5-9e6ad8ab6fa6",
            authorId: "79a8b1ae-36c7-4e59-bf51-d2e5f5a32a7a",
            name: "Museu Pelé",
            description:
              "Museu Pelé é um museu na cidade de Santos, dedicado à carreira do ex-jogador Pelé. Foi inaugurado em 15 de junho de 2014, como parte dos eventos paralelos à Copa do Mundo FIFA de 2014. Sua construção chegou a ser contestada por conta dos altíssimos valores envolvidos nas obras.",
            imagesLinks: [
              "https://pt.wikipedia.org/wiki/Museu_Pel%C3%A9#/media/Ficheiro:Alckmin_prestigia_inaugura%C3%A7%C3%A3o_do_Museu_Pel%C3%A9_em_Santos._(14251151820).jpg",
            ],
            latitude: "-23.9312259",
            longitude: "-46.3352035",
            zipCode: "11010-260",
            number: "1",
            mapsLink: "https://goo.gl/maps/HyrJuNmpq9hUcK1ZA",
            accessibility: ["ELEVATOR"],
            createdAt: "2023-05-06T22:30:27.162Z",
            updatedAt: "2023-05-06T22:30:27.162Z",
            __v: 0,
          },
          title: "Experiência histórica!",
          description:
            "Museu Pelé é um museu na cidade de Santos, dedicado à carreira do ex-jogador Pelé. Foi inaugurado em 15 de junho de 2014, como parte dos eventos paralelos à Copa do Mundo FIFA de 2014. Sua construção chegou a ser contestada por conta dos altíssimos valores envolvidos nas obras.",
          timeDuration: 1,
          timeDurationUnit: "HOURS",
          imagesLinks: [
            "https://pt.wikipedia.org/wiki/Museu_Pel%C3%A9#/media/Ficheiro:Alckmin_prestigia_inaugura%C3%A7%C3%A3o_do_Museu_Pel%C3%A9_em_Santos._(14251151820).jpg",
          ],
          createdAt: "2023-05-06T22:30:27.534Z",
          updatedAt: "2023-05-06T22:30:27.534Z",
          __v: 0,
        },
      ],
      title: "Experiência top",
      upVotes: 0,
      downVotes: 0,
      imagesLinks: [
        "https://upload.wikimedia.org/wikipedia/commons/7/73/At_Santos%2C_Brazil_2018_480_%28cropped%29.jpg",
      ],
      createdAt: "2023-05-06T22:30:27.595Z",
      updatedAt: "2023-05-06T22:30:27.595Z",
      __v: 0,
    },
    {
      _id: "1b5aa8a9-f7cd-4043-9e13-297effd9b133",
      authorId: "79a8b1ae-36c7-4e59-bf51-d2e5f5a32a7a",
      experiences: [
        {
          _id: "715acd8c-7031-432f-a203-f4d944293582",
          authorId: "79a8b1ae-36c7-4e59-bf51-d2e5f5a32a7a",
          location: {
            _id: "c2f4b97d-7551-453b-b8e5-9e6ad8ab6fa6",
            authorId: "79a8b1ae-36c7-4e59-bf51-d2e5f5a32a7a",
            name: "Museu Pelé",
            description:
              "Museu Pelé é um museu na cidade de Santos, dedicado à carreira do ex-jogador Pelé. Foi inaugurado em 15 de junho de 2014, como parte dos eventos paralelos à Copa do Mundo FIFA de 2014. Sua construção chegou a ser contestada por conta dos altíssimos valores envolvidos nas obras.",
            imagesLinks: [
              "https://pt.wikipedia.org/wiki/Museu_Pel%C3%A9#/media/Ficheiro:Alckmin_prestigia_inaugura%C3%A7%C3%A3o_do_Museu_Pel%C3%A9_em_Santos._(14251151820).jpg",
            ],
            latitude: "-23.9312259",
            longitude: "-46.3352035",
            zipCode: "11010-260",
            number: "1",
            mapsLink: "https://goo.gl/maps/HyrJuNmpq9hUcK1ZA",
            accessibility: ["ELEVATOR"],
            createdAt: "2023-05-06T22:30:27.162Z",
            updatedAt: "2023-05-06T22:30:27.162Z",
            __v: 0,
          },
          title: "Experiência histórica!",
          description:
            "Museu Pelé é um museu na cidade de Santos, dedicado à carreira do ex-jogador Pelé. Foi inaugurado em 15 de junho de 2014, como parte dos eventos paralelos à Copa do Mundo FIFA de 2014. Sua construção chegou a ser contestada por conta dos altíssimos valores envolvidos nas obras.",
          timeDuration: 1,
          timeDurationUnit: "HOURS",
          imagesLinks: [
            "https://pt.wikipedia.org/wiki/Museu_Pel%C3%A9#/media/Ficheiro:Alckmin_prestigia_inaugura%C3%A7%C3%A3o_do_Museu_Pel%C3%A9_em_Santos._(14251151820).jpg",
          ],
          createdAt: "2023-05-06T22:30:27.534Z",
          updatedAt: "2023-05-06T22:30:27.534Z",
          __v: 0,
        },
      ],
      title: "Experiência top",
      upVotes: 0,
      downVotes: 0,
      imagesLinks: [
        "https://pt.wikipedia.org/wiki/Museu_Pel%C3%A9#/media/Ficheiro:Alckmin_prestigia_inaugura%C3%A7%C3%A3o_do_Museu_Pel%C3%A9_em_Santos._(14251151820).jpg",
      ],
      createdAt: "2023-05-06T22:30:27.595Z",
      updatedAt: "2023-05-06T22:30:27.595Z",
      __v: 0,
    },
  ],
};

const TrailsTab = () => {
  const { trailsListHandler, trailsData } = useContext(GlobalContext);

  const { trails } = trailsDataMock as any;

  useEffect(() => {
    trailsListHandler();
  }, []);

  useEffect(() => {
    console.log({ trailsData });
  }, [trailsData]);

  return (
    <>
      <div>
        {trails.map((trail: any, i: number) => (
          <TrailCard data={trail} key={i} />
        ))}
      </div>
    </>
  );
};

export default TrailsTab;

import { GetStaticProps } from "next";
import { api } from "../services/api";

type Episode = {
  id: string;
  title: string;
  members: string;
  published_at: string;
  thumbnail: string;
  description: string;
  file: {
    url: string;
    type: string;
    duration: number;
  };
};

type HomeProps = {
  episodes: Episode[];
};

export default function Home(props: HomeProps) {
  console.log(props.episodes);
  return <h1>Index</h1>;
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("/episodes", {
    params: {
      _limit: 12,
      _sort: "published_at",
      _order: "desc",
    },
  });

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, //60 segundos x 60 minutos x 8 horas
  };
};

import "../styles/globals.scss";
import styles from "../styles/app.module.scss";

import { Header } from "../components/Header";
import { Player } from "../components/Player";
import { PlayerContext } from "../contexts/PlayerContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [episodesList, setEpisodesList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

  function play(episode) {
    setEpisodesList([episode]);
    setCurrentEpisodeIndex(0);
  }

  return (
    <PlayerContext.Provider value={{ episodesList, currentEpisodeIndex, play }}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  );
}

export default MyApp;

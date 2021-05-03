import '../styles/global.scss' //arquivo global, ele é chamado sempre (sempre chamado em todas requests)(footer e header pode entrar aqui)
import {Header} from '../components/Header';
import styles from '../styles/app.module.scss';
import { Player } from '../components/Player';

function MyApp({ Component, pageProps }) {
  return (
  <div className={styles.wrapper}>
    <main>
      <Header />
      <Component {...pageProps} />
    </main>
    <Player />
  </div>)
}

export default MyApp

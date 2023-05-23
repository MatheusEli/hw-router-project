import BotaoPrincipal from 'componentes/BotaoPrincipal';
import styles from "./NaoEcontrada.module.css";
import erro404 from "assets/erro_404.png";
import { useNavigate } from 'react-router-dom';

export default function NaoEcontrada() {

  const navegar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>

        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>

        <p className={styles.paragrafo}>
          Tem certeza de que era isso que vocÇe estava procurando?
        </p>

        <p className={styles.paragrafo}>
          guarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>

        <div 
        onClick={() => navegar(-1)}
        className={styles.botaoContainer}>
          <BotaoPrincipal tamanho="lg">
            Voltar
          </BotaoPrincipal>
        </div>

        <img
          src={erro404}
          className={styles.imagemCachorro}
          alt="Imagem cachorro"
        />
      </div>

      <div className={styles.espacoEmBranco}></div>
    </>
  );
}

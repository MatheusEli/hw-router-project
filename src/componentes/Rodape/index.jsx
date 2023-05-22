import styles from './Rodape.module.css'
import {ReactComponent as MarcaRegistrada} from 'assets/marca_registrada.svg'

export default function Rodape() {
  return (
    <div className={styles.rodape}>
        <MarcaRegistrada />
        Desenvolvido por Alura
    </div>
  )
}

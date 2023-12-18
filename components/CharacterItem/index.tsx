import Image from "next/image"
import styles from "./CharacterItem.module.scss"

type CharacterItemProps = {
    character: Character
}

const CharacterItem = ({ character }: CharacterItemProps) => {
    return (<a className={styles.gameItem} href={`/characters/${character.id}`} >
        <div className={styles.imageWrapper}>
            <img src={character.image} alt={character.name} width={100} height={100} />
        </div>
        <h2>{character.name}</h2>
        <p>{character.description ? character.description : 'No description'}</p>
    </a>)
}

export default CharacterItem
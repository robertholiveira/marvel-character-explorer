
import Image from "next/image"
import styles from "./CharacterDetails.module.scss"

type CharacterItemProps = {
    character: Character
}

const CharacterDetails = ({ character }: CharacterItemProps) => {
    return (
        <div className={styles.characterDetails}>
            <div className={styles.imgWrapper}>
                <img src={character.image} />
            </div>
            <div className={styles.details}>
                <h1>Name: {character.name} </h1>
                <p>Description: {character.description ? character.description : 'No description'} </p>
            </div>
        </div>)
}

export default CharacterDetails
import { Fragment } from "react"
import CharacterItem from "../CharacterItem"
import styles from "./CharacterList.module.scss"

type CharacterListProps = {
    characters: Character[]
}

const CharacterList = (props: CharacterListProps) => {
    return (<div className={styles.gameList}>
        {props.characters && props.characters.map((character: Character) => {
            return <Fragment key={character.id}><CharacterItem character={character} /></Fragment>
        })}</div>)
}

export default CharacterList
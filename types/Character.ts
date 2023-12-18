type Character = {
    id: number,
    name: string,
    description: string,
    image: string,
    isRelationsPopulated?: boolean,
    relatedTo: Character[]
}
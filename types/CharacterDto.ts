type ComicItemDto = {
    resourceURI: string,
    name: string
}

type CharacterDto = {
    id: number,
    name: string,
    description: string,
    thumbnail: {
        path: string,
        extension: string
    }
}
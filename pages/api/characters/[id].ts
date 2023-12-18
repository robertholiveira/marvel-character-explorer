import { fetchApi, generateHash } from "@/utils/api";
import { PrismaClient } from "@prisma/client";

import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    let character: Character = await getCharacter(Number(id))

    if (!character) {
        const response: ResponseCharacterAPI = await fetchApi(`http://gateway.marvel.com/v1/public/characters/${id}`)
        const characterFoundApi: CharacterDto = response.data?.results[0] as CharacterDto;
        if (characterFoundApi) {
            character = await createCharacterFromDTO(characterFoundApi)
            const comics: ResponseComicAPI = await fetchApi(`https://gateway.marvel.com/v1/public/characters/${id}/comics`)
            await createRelations(characterFoundApi.id, comics.data?.results as ComicItemDto[])
            return res.json(character)
        }
        else {
            return res.status(404).json({ error: "Character not found" })
        }
    }

    if (!character.isRelationsPopulated) {
        const comics: ResponseComicAPI = await fetchApi(`https://gateway.marvel.com/v1/public/characters/${id}/comics`)
        await createRelations(character.id, comics.data?.results as ComicItemDto[])
    }
    return res.json(character)
}

const createRelations = async (characterId: number, items: ComicItemDto[]) => {
    for (const item of items) {
        const response: ResponseCharacterAPI = await fetchApi(`${item.resourceURI}/characters`);
        const characters: CharacterDto[] = response.data?.results as CharacterDto[];
        if (characters.length > 0) {
            for (const character of characters) {
                let relatedCharacter: Character = await getCharacter(Number(character.id))

                if (!relatedCharacter) {
                    relatedCharacter = await createCharacterFromDTO(character)
                }

                await prisma.$transaction([
                    prisma.character.update({
                        where: { id: characterId },
                        data: { relatedTo: { connect: { id: relatedCharacter.id } } },
                    }),
                    prisma.character.update({
                        where: { id: relatedCharacter.id },
                        data: { relatedTo: { connect: { id: characterId } } },
                    }),
                ])
            }
        }
        await prisma.character.update({
            where: { id: characterId },
            data: { isRelationsPopulated: true },
        })
    }
}

const getCharacter = async (id: number) => {
    return await prisma.character.findUnique({ where: { id: Number(id) }, include: { relatedTo: true } }) as Character
}

const createCharacterFromDTO = async (characterDTO: CharacterDto) => {

    const character = {
        id: characterDTO.id,
        name: characterDTO.name,
        image: `${characterDTO.thumbnail.path}.${characterDTO.thumbnail.extension}`,
        description: characterDTO.description
    }

    return await prisma.character.create({
        data: {
            ...character
        }
    }) as Character
}

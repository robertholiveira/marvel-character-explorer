import { PrismaClient } from "@prisma/client";

import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let characters: Character[] = await prisma.character.findMany() as Character[]
    res.json(characters)
}
import MD5 from "crypto-js/md5";

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PUBLIC_KEY = process.env.PUBLIC_KEY;


export const generateHash = (timestamp: number) => {
    return MD5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`).toString()
}

export const fetchApi = async (url: string) => {
    const timestamp: number = new Date().getTime()
    const hash = generateHash(timestamp)
    const responseApi = await fetch(`${url}?apikey=${PUBLIC_KEY}&hash=${hash}&ts=${timestamp}&limit=100`)

    if (!responseApi.ok) {
        throw new Error((await responseApi.json()).message);
    }
    return await responseApi.json()
}
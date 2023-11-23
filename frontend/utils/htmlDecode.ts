import he from 'he'

const htmlDecode = (htmlString: string) => {
    return he.decode(htmlString)
}

export { htmlDecode }
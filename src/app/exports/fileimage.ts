export const FileInput = (event: EventTarget) => {
    const eventObj: MSInputMethodContext = <MSInputMethodContext>event
    const target: HTMLInputElement = <HTMLInputElement>eventObj.target
    const files: FileList = target.files
    return files
}

export const ShowImageInHTML = (value: FileList, id: string) => {
    if (value && value[0]) {
        const reader = new FileReader()
        reader.readAsDataURL(value[0])
        return reader.onload = function (e: any) {
            const image = document.getElementById(id)
            image.setAttribute('src', e.target.result)
            image.setAttribute('class', 'upimage upthumb')
            image.setAttribute('alt', value[0].name)
        }
    }
}

export const ImageToBase64Small = (img) => {
    const imgWidth = img.width * 0.01
    const imgHeight = img.height * 0.01

    const canvas = document.createElement('canvas')
    canvas.width = imgWidth
    canvas.height = imgHeight

    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0, imgWidth, imgHeight)
    return this.ImageBase64 = canvas.toDataURL('image/png')
}

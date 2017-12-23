export const FileInput = (event: EventTarget) => {
    return new Promise((resolve, reject) => {
        const eventObj: MSInputMethodContext = <MSInputMethodContext>event
        const target: HTMLInputElement = <HTMLInputElement>eventObj.target
        const files: FileList = target.files
        resolve(files)
    })
}

export const ShowImageInHTML = (value: FileList, id: string) => {
    if (value && value[0]) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(value[0])
            const img = reader.onload = function (e: any) {
                const image = document.getElementById(id)
                image.setAttribute('src', e.target.result)
                image.setAttribute('class', 'upimage upthumb')
                image.setAttribute('alt', value[0].name)
            }
            resolve(img)
        })
    }
}

export const ImageToBase64Small = (img) => {
    return new Promise((resolve, reject) => {
        const imgWidth = img.width * 0.01
        const imgHeight = img.height * 0.01

        const canvas = document.createElement('canvas')
        canvas.width = imgWidth
        canvas.height = imgHeight

        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, imgWidth, imgHeight)
        const ImageBase64 = canvas.toDataURL('image/png')

        resolve(ImageBase64)
    })
}

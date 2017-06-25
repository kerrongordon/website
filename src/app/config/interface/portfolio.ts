export interface Portfolio {
  $key: String,
  title: String,
  url: URL,
  description: String,
  markdown: any,
  thumbnail: PortfolioImage,
  largImage: PortfolioImage,
  imagePath: String,
  desktopBase64: String,
  timestamp: Number
}

interface PortfolioImage {
  url: String,
  image: File,
  base64: String,
  name: String
}
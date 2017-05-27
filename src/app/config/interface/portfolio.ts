export interface Portfolio {
  title: String,
  url: URL,
  description: String,
  markdown: any,
  thumbnail: PortfolioImage,
  largImage: PortfolioImage,
  timestamp: Number
}

export interface PortfolioImage {
  url: String,
  image: File,
  base64: String
}
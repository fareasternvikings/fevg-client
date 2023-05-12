interface ImageFormatInterface {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path?: string
  size: number
  width: number
  height: number
}

export interface ImageInterface {
  id: 1
  attributes: {
    name: string
    alternativeText?: string
    caption?: string
    width: number
    height: number
    formats: {
      [key: string]: ImageFormatInterface
    }
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl?: string
    provider: string
    provider_metadata?: string
    createdAt: string
    updatedAt: string
  }
}

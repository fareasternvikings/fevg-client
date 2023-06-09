import {ImageInterface} from './image.interface'

export interface ProductAttributesInterface {
  name: string
  slug: string
  price: number
  model: string
  description: string
  color: string
  sizes: string
  care: string
  compound: string
  activity: string[]
  label: string
  thumbnail: {
    data: ImageInterface
  }
  showcase: {
    image_1: {
      data: ImageInterface
    }
    image_2: {
      data: ImageInterface
    }
  }
}

export interface ProductInterface {
  id: number
  attributes: ProductAttributesInterface
}

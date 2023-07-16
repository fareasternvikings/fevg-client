import {ImageInterface} from './image.interface'

export interface ProductAttributesInterface {
  name: string
  slug: string
  price: number
  model: string
  description: string
  colors: string[]
  sizes: string[]
  care: string
  compound: string
  activity: string[]
  label: string
  images: {
    data: ImageInterface[]
  }
  showcase: {
    data: ImageInterface
  }
}

export interface ProductInterface {
  id: number
  attributes: ProductAttributesInterface
}

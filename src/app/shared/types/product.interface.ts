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
}

export interface ProductInterface {
  id: number
  attributes: ProductAttributesInterface
}

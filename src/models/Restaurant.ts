class RestaurantModel {
  id: number
  name: string
  imageUrl: string
  rating?: number
  category?: string
  description: string
  highlight?: string

  constructor(
    id: number,
    name: string,
    imageUrl: string,
    rating: number,
    category: string,
    description: string,
    highlight?: string
  ) {
    this.id = id
    this.name = name
    this.imageUrl = imageUrl
    this.rating = rating
    this.category = category
    this.description = description
    this.highlight = highlight
  }
}

export default RestaurantModel

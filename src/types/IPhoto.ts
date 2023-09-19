export interface IPhoto {
    id: string
    width: number
    height: number
    color: string
    blur_hash: string
    location: any
    tags: [any]
    downloads: number
    likes: number
    created_at: string
    updated_at: string
    liked_by_user: boolean
    description: string
    urls: {
      raw: string
      full: string
      regular: string
      small: string
      thumb: string
    }
    exif: any
    user: any
  }
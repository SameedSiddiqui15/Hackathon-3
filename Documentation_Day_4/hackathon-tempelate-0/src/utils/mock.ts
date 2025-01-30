import { client } from '../sanity/lib/client'

export async function getProducts(): Promise<Product[]> {
    return await client.fetch(`*[_type == "product"]{
        id,
        name,
        price,
        category,
        image,
        description,
        discountPercentage,
        isFeaturedProduct,
        stockLevel
    }`)
}

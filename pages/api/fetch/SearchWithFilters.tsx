// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  id: number
  name: string
  price: number
  product_image: string
  description: string
  By: string
  number_of_purchases: number
  created_at: Date
  updated_at: Date
}
// interface Data {
//   id: number;
//   name: string;
//   href: string;
//   price: number;
//   imageSrc: string;
//   imageAlt: string;
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const res1 = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_API +
      '/api/Products/search/' +
      req.body.SearchValue
  )

  const data = await res1.json()

  res.json([{ ss: 'ss' }])
}

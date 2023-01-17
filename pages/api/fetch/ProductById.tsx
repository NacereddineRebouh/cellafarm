import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  SearchValue: string
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
  res: NextApiResponse<Data>
) {
  const p = req.query
  const res1 = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_API +
      '/api/Products/getProduct/' +
      p.SearchValue
  )
  const data = await res1.json()
  res.json(data)
}

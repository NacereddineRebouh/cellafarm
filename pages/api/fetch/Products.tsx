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
  res: NextApiResponse<Data[]>
) {
  const res1 = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_API + '/api/Products/list'
  )
  const data = await res1.json()
  // console.log(data);
  res.json(data)
  // res.status(200).json([
  //   {`http://localhost:8000/
  //     id: 1,
  //     name: "Earthen Bottle",
  //     href: "#",
  //     price: 48,
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
  //     imageAlt:
  //       "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  //   },
  //   {
  //     id: 2,
  //     name: "Nomad Tumbler",
  //     href: "#",
  //     price: 35,
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
  //     imageAlt:
  //       "Olive drab green insulated bottle with flared screw lid and flat top.",
  //   },
  //   {
  //     id: 3,
  //     name: "Focus Paper Refill",
  //     href: "#",
  //     price: 89,
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
  //     imageAlt:
  //       "Person using a pen to cross a task off a productivity paper card.",
  //   },
  //   {
  //     id: 4,
  //     name: "Machined Mechanical Pencil",
  //     href: "#",
  //     price: 35,
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
  //     imageAlt:
  //       "Hand holding black machined steel mechanical pencil with brass tip and top.",
  //   },
  //   {
  //     id: 5,
  //     name: "Machined Mechanical Pencil",
  //     href: "#",
  //     price: 35,
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
  //     imageAlt:
  //       "Hand holding black machined steel mechanical pencil with brass tip and top.",
  //   },
  //   {
  //     id: 6,
  //     name: "Machined Mechanical Pencil",
  //     href: "#",
  //     price: 35,
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
  //     imageAlt:
  //       "Hand holding black machined steel mechanical pencil with brass tip and top.",
  //   },
  //   {
  //     id: 7,
  //     name: "Machined Mechanical Pencil",
  //     href: "#",
  //     price: 35,
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
  //     imageAlt:
  //       "Hand holding black machined steel mechanical pencil with brass tip and top.",
  //   },
  // ]);
}

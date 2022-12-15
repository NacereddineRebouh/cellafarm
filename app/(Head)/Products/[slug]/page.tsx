import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { La_Belle_Aurore } from '@next/font/google'
import { Icon, addIcon } from '@iconify/react/dist/offline'
import starFill from '@iconify-icons/bi/star-fill'
import starhalf from '@iconify-icons/bi/star-half'
import TabComponent from '../../../../Components/ProductDetails/TabComponent'
import BuyComponent from '../../../../Components/ProductDetails/BuyComponent'
// import Star from '@mui/icons-material/Star'

addIcon('star', starFill)

const belle = La_Belle_Aurore({
  subsets: ['latin'],
  variable: '--font-belle',
  weight: '400',
})

type Props = {
  slug: string
}
interface Data {
  id: string
  name: string
  price: number
  product_image: string
  description: string
  By: string
  number_of_purchases: number
  created_at: Date
  updated_at: Date
  category: string
}
interface PostPageProps {
  params: {
    slug: string
  }
}

async function getProducts() {
  const url = process.env.NEXT_PUBLIC_BACKEND_API + '/api/Products/list'
  console.log(url)
  const res = await fetch(url)
  return res.json()
}
// export async function generateStaticParams() {
//   const users = await getProducts()
//   return users.map((u: Data) => ({
//     slug: u.id + '',
//   }))
// }

async function getProductById(Id: number | string) {
  const url =
    process.env.NEXT_PUBLIC_BACKEND_API + '/api/Products/getProduct/' + Id
  // const url =
  //   process.env.NEXT_PUBLIC_BACKEND_API +
  //   '/api/Products/getProduct/' +
  //   new URLSearchParams({
  //     SearchValue: Id as string,
  //   })
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_API + '/api/Products/getProduct/' + Id
  )
  const data = await res.json()
  console.log(Id)
  return data
}

export default async function page({ params }: PostPageProps) {
  const { slug } = params
  const prod = await getProductById(slug)
  console.log('------------Generer---------')

  if (prod.status === 404) {
    notFound()
  }
  let product: Data = prod?.message
  return (
    <div className="mx-auto h-screen max-h-[1600px] max-w-[2500px] select-none pt-20">
      {/* {JSON.stringify(prod?.message)} */}
    </div>
  )
}

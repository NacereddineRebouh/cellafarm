import React from 'react'
// import { notFound } from 'next/navigation'
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

async function getProductById(Id: number | string) {
  const url =
    process.env.NEXT_PUBLIC_BACKEND_API + '/api/Products/getProduct/' + Id
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

  // if (prod.status === 404) {
  //   notFound()
  // }
  const product: Data = await prod?.message
  return (
    <div className="mx-auto h-screen max-h-[1600px] max-w-[2500px] select-none pt-20">
      <div className="flex h-full flex-row flex-wrap">
        {/* cover */}
        <div className="relative w-full flex-initial bg-transparent lg:h-full lg:w-[60%]">
          <Image
            src={product.product_image}
            alt={''}
            className="absolute top-0 left-0 object-contain transition-all duration-300 2xl:object-cover"
            fill
            sizes="(max-width: 1024px) 80vw, 60vw"
          ></Image>
          <div className="absolute top-[2%] left-[2%] cursor-default rounded-xl border-[2px] border-zinc-200 py-2 px-3 font-medium text-zinc-400">
            ref_{product.id ?? '?'}
          </div>
        </div>
        <div className="relative grid w-full flex-initial grid-rows-[30%_30%_40%] bg-[#74827E] p-7 lg:h-full lg:w-[40%]  xl:p-12 4xl:p-20">
          <div className="h-full w-full">
            {/* bg-teal-700 */}
            <div className="flex h-full w-full flex-col items-start justify-center p-2">
              <div className="flex justify-start font-bold uppercase text-stone-200 md:mb-5">
                {product.category ?? 'No category'}
              </div>
              <div className="flex justify-start text-[29px] text-stone-50 md:text-[35px]">
                {product.name ?? 'not listed'}
              </div>
              <div className="flex justify-start text-sm font-medium italic tracking-wide text-stone-700">
                By{' '}
                <span className="font-semibold uppercase">
                  {product.By ?? '...'}
                </span>
              </div>
              <div
                className={`flex w-full flex-1 flex-row items-center justify-between text-[40px] uppercase text-stone-50 md:text-[50px] ${belle.className}`}
              >
                <p className="pt-4">{'$' + product.price ?? 'Free'}</p>
                <div className="flex h-full flex-row items-center gap-x-2">
                  <Icon icon="star" className="w-6 md:w-10 lg:w-9" />
                  <Icon icon="star" className="w-6 md:w-10 lg:w-9" />
                  <Icon icon="star" className="w-6 md:w-10 lg:w-9" />
                  <Icon icon="star" className="w-6 md:w-10 lg:w-9" />
                  <Icon icon={starhalf} className="w-6 md:w-10 lg:w-9" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full">
            {/* <TabComponent prod={product} /> */}
          </div>
          <div className="absolute bottom-0 right-0 h-full max-h-[40%] w-full pb-7 pl-7 xl:pb-12 xl:pl-12 4xl:pb-20 4xl:pl-20 ">
            <div className="h-full w-full self-end rounded-tl-[52px] rounded-bl-[52px] bg-zinc-700 ">
              {/* <BuyComponent
                price={product.price as unknown as string}
              ></BuyComponent> */}
            </div>
          </div>
        </div>
      </div>
      {/* {JSON.stringify(prod?.message)} */}
    </div>
  )
}

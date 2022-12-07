import React from 'react'
import Image from 'next/image'
type Props = { product: Data }

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
export default function ProductCard2({ product }: Props) {
  const imgsrc =
    process.env.NEXT_PUBLIC_BACKEND_API + '/' + product.product_image
  const title =
    product.number_of_purchases / 1000 < 1
      ? product.number_of_purchases
      : `S${(product.number_of_purchases / 1000).toFixed()}k in this year`
  return (
    <div className="">
      <link
        rel="stylesheet"
        href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
      />

      {/* <!-- Product Card --> */}
      <div className="max-w-96 flex cursor-pointer flex-col overflow-hidden rounded-xl border-[1px] border-gray-300 duration-300">
        {/* <!-- Preview --> */}
        <div className="min-h-48 group aspect-h-1 aspect-w-1 relative my-auto inline overflow-hidden">
          {/* <!-- Thumbnail --> */}
          {/* <Image
            className="absolute rounded-t object-cover h-full w-full transition-all duration-300 hover:scale-110"
            src="https://images.unsplash.com/photo-1627384113858-ce93ff568d1f?auto=format&fit=crop&w=1170&q=80"
            alt="Product Preview"
            fill
          /> */}
          <Image
            src={imgsrc}
            // src={product.imageSrc}
            alt={'product.imageAlt'}
            className="absolute h-full w-full rounded-t-lg object-cover transition-all duration-500 group-hover:scale-110"
            fill
          />

          {/* <!-- Hover Bar --> */}
          <div className="my-auto h-full w-full">
            <div
              className="absolute bottom-0 flex h-16 w-full
                     flex-row justify-end space-x-2 bg-none
                    from-black/20 via-gray-800/20 to-transparent
                    px-3 opacity-0 transition-all delay-100 
                    duration-200 ease-in-out group-hover:bg-gradient-to-t group-hover:opacity-100"
            >
              {/* <!-- Add to Bookmarks Button --> */}
              <button
                className="my-auto h-9 
                        w-9 rounded-full bg-gray-50/10 px-1 transition-colors
                        duration-200 hover:bg-gray-50/20"
              >
                <i
                  className="mdi mdi-playlist-plus text-xl text-gray-200
                            transition-all duration-200 hover:text-white"
                  title="Add to Bookmarks"
                />
              </button>

              {/* <!-- Add to Favorites Button --> */}
              <button
                className="my-auto h-9 
                        w-9 rounded-full bg-gray-50/10 px-1 transition-colors
                        duration-200 hover:bg-gray-50/20"
              >
                <i
                  className="mdi mdi-heart p-1 text-xl text-gray-200
                            transition-all duration-200 hover:text-white"
                  title="Add to Favorites"
                ></i>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Body --> */}
        <div className="flex flex-col rounded-b bg-white p-3">
          {/* <!-- Title --> */}
          <div className="truncate text-sm font-semibold text-gray-900 hover:underline">
            {product.name}
          </div>

          {/* <!-- Author - Category --> */}
          <div className="mt-1 truncate text-xs text-gray-400">
            by
            {/* <!-- Author --> */}
            <a className="font-semibold hover:underline"> EgoistDeveloper </a>
            {product.By}
            {/* <!-- Category --> */}
            <a className="font-semibold hover:underline"> e-commerce </a>
          </div>

          {/* <!-- Price --> */}
          <div className="mt-4 mb-1 text-sm font-bold text-gray-600">
            ${product.price}
          </div>

          {/* <!-- Body --> */}
          <div className="mt-2 flex flex-row">
            {/* <!-- Detail Column --> */}
            <div className="flex flex-auto flex-col">
              {/* <!-- Rating --> */}
              <div className="group flex flex-row">
                <i
                  className="mdi mdi-star text-xs text-amber-400 
                            transition-all duration-200 hover:text-amber-500"
                  title="Worst"
                ></i>

                <i
                  className="mdi mdi-star text-xs text-amber-400 
                            transition-all duration-200 hover:text-amber-500"
                  title="Bad"
                ></i>

                <i
                  className="mdi mdi-star text-xs text-amber-400 
                            transition-all duration-200 hover:text-amber-500"
                  title="Not Bad"
                ></i>

                <i
                  className="mdi mdi-star text-xs text-amber-400 
                            transition-all duration-200 hover:text-amber-500"
                  title="Good"
                ></i>

                <i
                  className="mdi mdi-star text-xs text-amber-400 
                            transition-all duration-200 hover:text-amber-500"
                  title="Awesome"
                ></i>

                <div className="ml-1 text-xs text-gray-400 hover:underline">
                  (45)
                </div>
              </div>

              {/* <!-- Statistic --> */}
              <div
                className="mt-1 text-xs text-gray-400"
                title={title as string}
              >
                {product.number_of_purchases / 1000 < 1
                  ? product.number_of_purchases
                  : `${(product.number_of_purchases / 1000).toFixed()}k`}{' '}
                Purchases
              </div>
            </div>

            {/* <!-- Button Column --> */}
            <div className="flex flex-auto flex-row justify-end">
              {/* <!-- Cart Button --> */}
              <a
                className="group my-auto mr-2 flex rounded-lg border border-green-500
                        px-3 py-2 text-xs 
                        transition-all
                        duration-200 hover:bg-green-500"
              >
                {/* <!-- Icon --> */}
                <i
                  className="mdi mdi-cart-outline text-green-700
                            delay-100 group-hover:text-white"
                ></i>
              </a>

              {/* <!-- Preview Link Button --> */}
              <a
                className="group my-auto flex rounded-lg border border-green-500 
                        px-3 py-2 text-xs 
                        transition-all
                        duration-200 hover:bg-green-500"
              >
                {/* <!-- Icon --> */}
                <i
                  className="mdi mdi-eye-outline text-green-700
                            delay-100 group-hover:text-white"
                ></i>

                {/* <!-- Text --> */}
                <div
                  className="ml-2 text-xs font-semibold text-green-700
                            delay-100 group-hover:text-white"
                >
                  Live Preview
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

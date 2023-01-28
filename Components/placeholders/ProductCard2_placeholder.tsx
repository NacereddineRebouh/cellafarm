import React from 'react'

type Props = {}

export default function ProductCard2({}: Props) {
  return (
    <div className="relative">
      {/* <!-- Product Card --> */}
      <div
        className="max-w-96 flex cursor-pointer flex-col overflow-hidden rounded-xl border-[1px] border-gray-300 duration-300"
        tabIndex={1}
      >
        {/* <!-- Preview --> */}
        <div className="min-h-48 aspect-h-1 aspect-w-1 relative my-auto inline overflow-hidden">
          {/* <!-- Thumbnail --> */}
          <div className="absolute h-full w-full rounded-t-lg bg-gray-300 object-cover" />

          {/* <!-- Hover Bar --> */}
          <div className="my-auto h-full w-full">
            <div
              className="absolute bottom-0 flex h-16 w-full
                     flex-row justify-end space-x-2 bg-none
                    from-black/20 via-gray-800/20 to-transparent
                    px-3 opacity-0"
            >
              {/* <!-- Add to Bookmarks Button --> */}
              <button
                className="group/book my-auto 
                h-9 w-9 animate-pulse rounded-full bg-gray-50/10 px-1 transition-colors duration-200"
              ></button>

              {/* <!-- Add to Favorites Button --> */}
              <button className="my-auto h-9 w-9 animate-pulse rounded-full bg-gray-50/10 px-1 text-center"></button>
            </div>
          </div>
        </div>

        {/* <!-- Body --> */}
        <div className="flex flex-col rounded-b bg-white p-3">
          {/* <!-- Title --> */}
          <div className="h-4 w-20 animate-pulse rounded-md bg-gray-300" />

          {/* <!-- Author - Category --> */}
          <div className="h-4 w-full animate-pulse rounded-md bg-gray-300" />

          {/* <!-- Price --> */}
          <div className="mt-4 mb-1 h-4 w-14 animate-pulse rounded-md bg-gray-300" />

          {/* <!-- Body --> */}
          <div className="mt-2 flex flex-row">
            {/* <!-- Detail Column --> */}
            <div className="flex flex-auto flex-col">
              {/* <!-- Rating --> */}
              <div className="h-1 w-32 animate-pulse rounded-md bg-gray-300"></div>

              {/* <!-- Statistic --> */}
              <div className="mt-1 h-2 w-32 animate-pulse rounded-md bg-gray-300" />
            </div>

            {/* <!-- Button Column --> */}
            <div className="flex flex-auto flex-row justify-end">
              {/* <!-- Cart Button --> */}
              <div className=" h-[34px] w-9 animate-pulse rounded-md bg-gray-300" />

              {/* <!-- Preview Link Button --> */}
              <div className="h-[34px] w-32 animate-pulse rounded-md bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import DefaultTags from '@/Components/defaults/DefaultTags'

export default function Head() {
  return (
    <>
      <DefaultTags />
      {/* <!-- HTML Meta Tags --> */}
      <title key="title">CellaFarm</title>
      <meta
        name="url"
        property="og:url"
        content="https://cellafarm.vercel.app/"
      />
      <meta name="type" property="og:type" content="website" />
      <meta name="title" property="og:title" content="Cellafarm" />
      <meta
        name="description"
        property="og:description"
        content="Cellafarm: We believe Future of Food is Here"
      ></meta>
      <meta
        name="image"
        property="og:image"
        content="https://cellafarm.vercel.app/og/og_image.png"
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="cellafarm.vercel.app" />
      <meta property="twitter:url" content="https://cellafarm.vercel.app/" />
      <meta name="twitter:title" content="Cellafarm" />
      <meta
        name="twitter:description"
        content="Cellafarm: We believe Future of Food is Here"
      />
      <meta
        name="twitter:image"
        content="https://cellafarm.vercel.app/og/og_image.png"
      />
      {/* -------twitter end------- */}

      <meta
        name="description"
        content="Cellafarm: We believe Future of Food is Here"
      />
    </>
  )
}

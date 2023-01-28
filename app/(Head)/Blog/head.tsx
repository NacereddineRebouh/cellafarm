import DefaultTags from '@/Components/defaults/DefaultTags'

export default function Head() {
  return (
    <>
      <DefaultTags />

      <title key="title">Blog</title>
      <meta property="og:title" content="Blog" />
    </>
  )
}

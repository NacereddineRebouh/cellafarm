import DefaultTags from '@/Components/defaults/DefaultTags'
export default function Head({ params }: { params: { slug: string } }) {
  const title = 'Products: Product ' + params.slug
  return (
    <>
      <DefaultTags />
      <title>{title}</title>
    </>
  )
}

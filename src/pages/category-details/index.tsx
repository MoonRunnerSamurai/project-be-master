import { MediaDetails } from "@/components/media-details";
import { categoryMediaApi } from "@/redux/services/category-media.api";
import { contentMediaApi } from "@/redux/services/content-media.api";

export default function CategoryDetails() {
  const id = location.pathname.split("/").pop()
  const { data } = categoryMediaApi.useGetCategoriesQuery()
  const detailsData = data?.find((item) => item.id === id)
  const { data: mediaData } = contentMediaApi.useGetContentMediaQuery()
  const foundMedia = mediaData?.filter(({ categories_content }) => {
    const foundData = categories_content.some((cat) => {
      return cat.toLowerCase().includes(detailsData.name_category.toLowerCase())
    })

    return foundData
  })

  return (
    <main className="bg-gradient-primary px-20 py-8 gap-8 min-h-screen h-full grid content-baseline">
      <button
        onClick={() => {
          history.back()
        }}
        className="bg-white px-6 py-2 font-bold text-base rounded-3xl self-baseline place-self-start"
      >
        Volver
      </button>

      <section className="flex flex-col gap-4 text-white">
        <img src={detailsData?.url_category} alt={`Imagen de ${detailsData?.name_category}`} className="h-32 w-full rounded-3xl object-cover" />
        <h1 className="text-4xl font-extrabold text-center">{detailsData?.name_category}</h1>
        <p>{detailsData?.description_category}</p>

        <section className="mt-12">
          <h2 className="text-2xl font-extrabold">Videos</h2>
          <article className="flex flex-wrap gap-8">
            {
              foundMedia?.map((item) => {
                return <MediaDetails contentMedia={item} />
              })
            }
          </article>
        </section>
      </section>
    </main>
  )
}
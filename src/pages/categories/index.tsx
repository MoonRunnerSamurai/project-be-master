import { CategoryCard } from "@/components/category-card";
import { categoryMediaApi } from "@/redux/services/category-media.api";
import { Link } from "react-router-dom";

export default function Categories() {
  const { data, isLoading, isSuccess, error } = categoryMediaApi.useGetCategoriesQuery()

  return (
    <main className="bg-gradient-primary min-h-screen h-full grid px-20 py-8 gap-4">
      <button
        onClick={() => {
          history.back()
        }}
        className="bg-white self-start place-self-start px-6 py-2 font-bold text-base rounded-3xl "
      >
        Volver
      </button>

      <section className='grid grid-cols-3 gap-4 overflow-auto'>
        {
          data?.map((item) => {
            const { id } = item;

            return (
              <Link to={`/category-details/${item.id}`}>
                <CategoryCard className='min-h-16 min-w-16 rounded-3xl overflow-hidden hover:scale-95 transition-transform' categoryMedia={item} key={id} imgClassName='w-full h-full' />
              </Link>
            )
          })
        }
      </section>
    </main>
  )
}
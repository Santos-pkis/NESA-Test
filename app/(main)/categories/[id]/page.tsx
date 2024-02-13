import CategoriesDetailsHeader from "@/components/UI/Categories/Details/header";
import { allCategories } from "@/lib/data/category";
import { redirect } from "next/navigation";

type Context = { params: { id: string } };

export const dynamicParams = true;

const CategoryDetails = ({ params }: Context) => {
  const idAsInt = parseInt(params.id);

  // if (idAsInt < 1 || idAsInt > 16) redirect("/categories");

  const category = allCategories.find((el) => el.id === idAsInt);

  return (
    <>
      <CategoriesDetailsHeader id={idAsInt} category={category} />
      <main></main>
    </>
  );
};

export default CategoryDetails;

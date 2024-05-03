import CategoriesDetails from "@/components/UI/Categories/Details";
import { allCategories, categoryDetails } from "@/lib/data/category";

type Context = { params: { id: string } };

export const dynamicParams = true;

const CategoryDetails = ({ params }: Context) => {
  const idAsInt = parseInt(params.id);

  const category = allCategories.find((el) => el.id === idAsInt);
  const details = categoryDetails.find((el) => el.id === idAsInt);

  return <CategoriesDetails id={idAsInt} category={category} details={details} />;
};

export default CategoryDetails;

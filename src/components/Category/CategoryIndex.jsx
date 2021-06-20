import { useHistory } from "react-router-dom";
import CategoryList from "../../containers/Category/CategoryList";
import CategoryModel from "../../models/CategoryModel";

const CategoryIndex = () => {
  const history = useHistory();

  const handleGoPageCreate = () => {
    history.push("/Create", { model: CategoryModel });
  };

  return (
    <div className="container">
      <button
        onClick={handleGoPageCreate}
        className="btn btn-primary mt-3 mb-3"
      >
        Create New Category
      </button>
      <CategoryList />
    </div>
  );
};

export default CategoryIndex;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import { CategoryCreator } from "../../state";

const CategoryCreate = () => {
  const history = useHistory();

  const location = useLocation();
  const categoryModel = location.state.model;
  const [category, setCategory] = useState(categoryModel);

  const dispatch = useDispatch();
  const { categoryCreate } = bindActionCreators(CategoryCreator, dispatch);

  const submit = (e) => {
    e.preventDefault();
    categoryCreate(category);
    setCategory(categoryModel);
    history.push("/");
  };

  const handleCreate = (e) => {
    setCategory((oldData) => ({
      ...oldData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container">
      <h2>Create New Category</h2>
      <form onSubmit={submit}>
        <div className="form-group mt-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={handleCreate}
            value={category.name}
            name="name"
            className="form-control"
            placeholder="Enter name..."
          />
        </div>
        <div className="form-group mt-3 mb-3">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            onChange={handleCreate}
            value={category.description}
            name="description"
            className="form-control"
            placeholder="Enter description..."
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
        <button type="button" onClick={() => history.push("/")} className="btn btn-dark">Back</button>
      </form>
    </div>
  );
};

export default CategoryCreate;

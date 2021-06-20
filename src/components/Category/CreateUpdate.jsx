import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import { CategoryCreator } from "../../state";

const CategoryUpdate = () => {
  const localtion = useLocation();
  const history = useHistory();

  const dispatch = useDispatch();
  const { categoryUpdate } = bindActionCreators(CategoryCreator, dispatch);

  const [category, setCategory] = useState(localtion.state.item);

  const submit = (e) => {
    e.preventDefault();
    categoryUpdate(category);
    history.push("/");
  };

  const handleUpdate = (e) => {
    setCategory((oldData) => ({
      ...oldData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container">
      <h2>Update Category</h2>
      <form onSubmit={submit}>
        <div className="form-group mt-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={handleUpdate}
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
            onChange={handleUpdate}
            value={category.description}
            name="description"
            className="form-control"
            placeholder="Enter description..."
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        &nbsp;
        <button
          type="button"
          onClick={() => history.push("/")}
          className="btn btn-dark"
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default CategoryUpdate;

import { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { CategoryCreator } from "../../state";

const CategoryList = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { categoryRetrieveAll, categoryDelete } = bindActionCreators(
    CategoryCreator,
    dispatch
  );

  const categories = useSelector((state) => state.category);

  const handleGoToUpdate = (item) => {
    history.push("/update", { item: item });
  };

  const UseEffectDidMount = () =>
    useEffect(() => {
      setTimeout(() => {
        categoryRetrieveAll();
      }, 1500);
    }, []);

  UseEffectDidMount();

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Created Date</th>
          <th scope="col">Updated Date</th>
          <th scope="col">Deleted Date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((item, key) => (
          <tr key={key}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.createdDate}</td>
            <td>{item.updateddDate}</td>
            <td>{item.deletedDate}</td>
            <td>
              <button
                onClick={() => handleGoToUpdate(item)}
                className="btn btn-success"
              >
                Update
              </button>
              &nbsp;&nbsp;
              <button
                onClick={() => categoryDelete(item.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryList;

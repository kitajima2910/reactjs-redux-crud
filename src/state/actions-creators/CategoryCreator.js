import CategoryService from "../../services/CategoryService";
import {
  ActionCategoryRetrieveAll,
  ActionCategoryDelete,
  ActionCategoryCreate,
  ActionCategoryRetrieveById,
  ActionCategoryUpdate,
} from "../actions/CategoryAction";

export const categoryCreate = (data) => async (dispatch) => {
  try {
    const response = await CategoryService.create(data);
    dispatch(ActionCategoryCreate(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const categoryDelete = (id) => async (dispatch) => {
  try {
    const response = await CategoryService.delete(id);
    dispatch(ActionCategoryDelete(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const categoryUpdate = (data) => async (dispatch) => {
  try {
    const response = await CategoryService.update(data);
    dispatch(ActionCategoryUpdate(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const categoryRetrieveAll = () => async (dispatch) => {
  try {
    const response = await CategoryService.retrieveAll();
    dispatch(ActionCategoryRetrieveAll(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const categoryRetrieveById = (id) => async (dispatch) => {
  try {
    const response = await CategoryService.retrieveGetById(id);
    dispatch(ActionCategoryRetrieveById(response.data));
  } catch (error) {
    console.error(error);
  }
};

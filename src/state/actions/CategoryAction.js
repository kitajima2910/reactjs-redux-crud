import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  RETRIEVE_CATEGORY,
  RETRIEVE_CATEGORY_ID,
  UPDATE_CATEGORY,
} from "../action-types/CategoryType";

export const ActionCategoryRetrieveAll = (data) => {
  return {
    type: RETRIEVE_CATEGORY,
    payload: data,
  };
};

export const ActionCategoryCreate = (data) => {
  return {
    type: CREATE_CATEGORY,
    payload: data,
  };
};

export const ActionCategoryDelete = (data) => {
  return {
    type: DELETE_CATEGORY,
    payload: data,
  };
};

export const ActionCategoryRetrieveById = (data) => {
  return {
    type: RETRIEVE_CATEGORY_ID,
    payload: data,
  };
};

export const ActionCategoryUpdate = (data) => {
  return {
    type: UPDATE_CATEGORY,
    payload: data,
  };
};

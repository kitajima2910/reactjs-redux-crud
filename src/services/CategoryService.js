import http from '../common/http';

class CategoryService {

    create = (data) => {
        return http.post("/javadocfast/category", data);
    }

    delete = (id) => {
        return http.delete(`/javadocfast/category/${id}`);
    }

    update = (data) => {
        return http.put("/javadocfast/category", data);
    }

    retrieveAll = () => {
        return http.get("/javadocfast/categories");
    }

    retrieveGetById = (id) => {
        return http.get(`/javadocfast/category/${id}`);
    }

}

export default new CategoryService();

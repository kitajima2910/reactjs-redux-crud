class CategoryModel {

    constructor(
        id = "", 
        name = "", 
        description = "", 
        createdDate = new Date(), 
        updatedDate = null, 
        deletedDate = null
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.deletedDate = deletedDate;
    }
    
}

export default new CategoryModel();
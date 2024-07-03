import React from "react";
import { useCreateCategoryMutation } from "../../context/api/categoryApi";
import { useGetInputValue } from "../../hooks/useGetInputValue";

let initialState = {
  title: "",
};

const CreateCategory = () => {
  const [CreateCategory, { isLoading }] = useCreateCategoryMutation();
  const { formData, setFormData, handleChange } =
    useGetInputValue(initialState);

  const handleCreate = (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("title", formData.title);
    CreateCategory(form);
    setFormData(initialState);
  };

  return (
    <div>
      <form onSubmit={handleCreate} className="create__category">
        <h1 className="create__category__title">Create Category</h1>
        <input
          type="text"
          className="create__category__input"
          placeholder="Category name"
          onChange={handleChange}
          name="title"
        />
        <button
          className="create__category__btn"
          disabled={isLoading ? "Creating..." : ""}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;

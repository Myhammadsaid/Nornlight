import React from "react";
import { useCreateCategoryMutation } from "../../context/api/categoryApi";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { toast } from "react-toastify";

let initialState = {
  title: "",
};

const CreateCategory = () => {
  const [CreateCategory, { isLoading }] = useCreateCategoryMutation();
  const { formData, setFormData, handleChange } =
    useGetInputValue(initialState);

  const handleCreate = (e) => {
    e.preventDefault();
    CreateCategory(formData);
    setFormData(initialState);
    toast.success("Category Created");
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

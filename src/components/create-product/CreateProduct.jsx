import React, { useState } from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { useCreateProductMutation } from "../../context/api/productApi";

let initialState = {
  title: "",
  price: "",
  url: "",
  category: "",
  desc: "",
};

const CreateProduct = () => {
  const [CreateProduct, { isLoading }] = useCreateProductMutation();
  const { handleChange, formData, setFormData } =
    useGetInputValue(initialState);

  const handleCreate = (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("title", formData.title);
    form.append("price", formData.price);
    form.append("images", formData.images);
    form.append("category", formData.category);
    form.append("desc", formData.desc);
    CreateProduct(form);
    formData.price = +formData.price;
    formData.images = formData.images.split("\n").filter((i) => i.trim());
    setFormData(initialState);
  };

  return (
    <div>
      <form className="create__form" onSubmit={handleCreate}>
        <h1 className="create__form__title">CreateProduct</h1>
        <div className="create__form__inputs">
          <h3 className="create__form__inputs__text">Title</h3>
          <input
            className="create__form__inputs__input"
            type="text"
            required
            onChange={handleChange}
            value={formData.title}
            name="title"
            placeholder="Title"
          />
        </div>
        <div className="create__form__inputs">
          <h3 className="create__form__inputs__text">Price</h3>
          <input
            className="create__form__inputs__input"
            type="number"
            required
            onChange={handleChange}
            value={formData.price}
            name="price"
            placeholder="Price"
          />
        </div>
        <div className="create__form__inputs">
          <h3 className="create__form__inputs__text">Category</h3>
          <select
            className="create__form__inputs__select"
            type="text"
            required
            onChange={handleChange}
            value={formData.category}
            name="category"
            placeholder="Category"
          >
            <option value="phone">phone</option>
            <option value="conditioner">conditioner</option>
            <option value="laptop">laptop</option>
            <option value="TV">TV</option>
          </select>
        </div>
        <div className="create__form__inputs">
          <h3 className="create__form__inputs__text">Description</h3>
          <textarea
            name="desc"
            placeholder="Comment"
            className="create__form__inputs__input"
            required
            onChange={handleChange}
            value={formData.desc}
          ></textarea>
        </div>
        <div className="create__form__inputs">
          <h3 className="create__form__inputs__text">ImgUrl</h3>
          <textarea
            name="url"
            placeholder="Images"
            className="create__form__inputs__input"
            required
            onChange={handleChange}
            value={formData.url}
          ></textarea>
        </div>
        <button
          className="create__form__btn"
          disabled={isLoading ? "Creating..." : ""}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;

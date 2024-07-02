import React, { useState } from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";

let initialState = {
  title: "",
  price: "",
  images: "",
};

const CreateProduct = () => {
  const { handleChange, formData, setFormData } =
    useGetInputValue(initialState);

  const handleCreate = (e) => {
    e.preventDefault();
    formData.price = +formData.price;
    formData.images = formData.images.split("\n").filter((i) => i.trim());
    console.log(formData);
    setFormData(initialState);
  };

  return (
    <div>
      <h1>CreateProduct</h1>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          required
          onChange={handleChange}
          value={formData.title}
          name="title"
          placeholder="Title"
        />
        <input
          type="number"
          required
          onChange={handleChange}
          value={formData.price}
          name="price"
          placeholder="Price"
        />
        <textarea
          name="images"
          required
          onChange={handleChange}
          value={formData.images}
        ></textarea>
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;

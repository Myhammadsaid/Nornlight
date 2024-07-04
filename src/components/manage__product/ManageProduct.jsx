import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "../../context/api/productApi";

const ManageProduct = () => {
  const { data, isLoading } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  // const [] = useUpdateProductMutation();

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to remove ${id} from the cart?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire(
          "Deleted!",
          `${id} has been removed from the cart.`,
          "success"
        );
      }
    });
  };

  let productItems = data?.map((el) => (
    <div className="manage__card" key={el.id}>
      <img src={el.url[0]} alt={el.title} />
      <div className="manage__card__content">
        <h2 className="manage__card__content__title" title={el.title}>
          {el.title}
        </h2>
        <div className="manage__card__content__items">
          <span>
            <s>${el.price * 2}</s>
            <h4 className="manage__card__item">${el.price}</h4>
          </span>
          <span>
            <BiEditAlt />
            <RiDeleteBin6Line onClick={() => handleDeleteProduct(el.id)} />
          </span>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="manage">
        <h1 className="manage__title">Manage product</h1>
        <div className="manage__cards">{productItems}</div>
      </div>
    </div>
  );
};

export default ManageProduct;

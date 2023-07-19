"use client";
import { useRouter } from "next/navigation";
import React, { SyntheticEvent, useState } from "react";

type Product = {
    id: number;
    title: string;
    price: number;
  };

export default function UpdateProduct(prod: Product) {
  const [title, setTitle] = useState(prod.title);
  const [price, setPrice] = useState(prod.price);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }
  async function handleUpdate(e: SyntheticEvent) {
    e.preventDefault();

    setLoading(false);
      await fetch(`http://localhost:5000/products/${prod.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          price: price,
        }),
      });
    setLoading(true);
    router.refresh();
    setModal(false);
  }
  return (
    <div>
      <button className="btn btn-info" onClick={handleChange}>
        Edit
      </button>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={modal}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit {prod.title}</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="input w-full input-bordered"
                placeholder="Product Name"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Title</label>
              <input
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                type="text"
                className="input w-full input-bordered"
                placeholder="Price"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn btn-error" onClick={handleChange}>
                Close
              </button>
              {loading ? (
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              ) : (
                <button type="submit" className="btn loading">
                  Updating...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

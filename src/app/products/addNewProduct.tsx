"use client";
import { useRouter } from "next/navigation";
import React, { SyntheticEvent, useState } from "react";

export default function AddNewProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState("");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }
  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    setLoading(false);
    if (title != '' && price != '') {
      await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          price: price,
        }),
      });
    }
    setLoading(true);
    setTitle("");
    setPrice("");
    router.refresh();
    setModal(false);
  }
  return (
    <div>
      <button className="btn btn-success" onClick={handleChange}>
        Add New
      </button>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={modal}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New product</h3>
          <form onSubmit={handleSubmit}>
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
                onChange={(e) => setPrice(e.target.value)}
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
                  Save
                </button>
              ) : (
                <button type="submit" className="btn loading">
                  Saving...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

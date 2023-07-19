"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Product = {
    id: number;
    title: string;
    price: number;
  };

export default function DeleteProduct(prod:Product) {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }
  async function handleDelete(prodId: number) {

    setLoading(false);
      await fetch(`http://localhost:5000/products/${prodId}`, {
        method: "DELETE"
      });

    setLoading(true);
    router.refresh();
    setModal(false);
  }
  return (
    <div>
      <button className="btn btn-error" onClick={handleChange}>
        Delete
      </button>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={modal}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure delete {prod.title}</h3>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {loading ? (
                <button type="submit" onClick={()=> handleDelete(prod.id)} className="btn btn-error">
                  Delete
                </button>
              ) : (
                <button type="submit" className="btn loading">
                  Deleting...
                </button>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}

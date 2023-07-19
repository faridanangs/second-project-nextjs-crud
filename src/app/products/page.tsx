import AddNewProduct from "./addNewProduct";
import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";

type Product = {
  id: number;
  title: string;
  price: number;
};

export const metadata = {
  title: "Products",
};

async function getProduct() {
  const res = await fetch("http://localhost:5000/products/", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductsList() {
  const products: Product[] = await getProduct();
  return (
    <div className="p-10 ">
      <div className="py-2">
        <AddNewProduct />
      </div>
      <table className="table w-full">
        <thead>
          <tr className="text-lg">
            <th>No</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{prod.title}</td>
              <td>{prod.price}</td>
              <td className="flex gap-2">
                <UpdateProduct {...prod}/>
                <DeleteProduct {...prod}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";


type Product = {
    id: number;
    title: string;
    price: number;
};

async function getProducts() {
    const res = await fetch("http://localhost:5000/products", {
        cache: "no-store",
    });
    return res.json();
}

export default async function ProductList() {
    const products: Product[] = await getProducts();
  return (
    // <div>
    //     {products.map((products, index) => (
    //         <p key={products.id}>{products.title}</p>
    //     ))}
    // </div>

    <div className="py-10 px-10">
        <div className="py-1">
            <AddProduct/>
        </div>
        <table className="table w-full">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            
            <tbody>
                {products.map((product, index) => (
                    <tr key={product.id}>
                        <th>{index + 1}</th>
                        <th>{product.title}</th>
                        <th>{product.price}</th>
                        <th className="flex">
                            <UpdateProduct {...product} />
                            <DeleteProduct {...product} />
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

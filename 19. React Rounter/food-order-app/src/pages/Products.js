import { Link } from "react-router-dom";

function ProductsPage() {
    return (
        <>
            <h1>The Products</h1>
            <p>
                Back to <Link to="/">Home Page</Link>
            </p>
        </>
    );
}

export default ProductsPage;

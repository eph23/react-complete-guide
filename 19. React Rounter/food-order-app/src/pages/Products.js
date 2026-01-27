import { Link } from "react-router-dom";

function ProductsPage() {
    return (
        <>
            <h1>The Products</h1>
            <ul>
                <li>Product1</li>
                <li>Product2</li>
                <li>Product3</li>
                <li>Product4</li>
                <li>Product5</li>
            </ul>
            <p>
                Back to <Link to="/">Home Page</Link>
            </p>
        </>
    );
}

export default ProductsPage;

import { Link } from "react-router-dom";

function FarmerDashboard() {
  return (
    <div>

      <h1>Farmer Dashboard</h1>

      <h3>Welcome Farmer</h3>

      <ul>
        <li>
          <Link to="/add-product">
            Add Product
          </Link>
        </li>

        <li>
          <Link to="/products">
            View Products
          </Link>
        </li>

        <li>
          <Link to="/orders">
            View Orders
          </Link>
        </li>
      </ul>

    </div>
  );
}

export default FarmerDashboard;
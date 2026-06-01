import { Link } from "react-router-dom";

function DomesticDashboard() {
  return (
    <div>

      <h1>Domestic Buyer Dashboard</h1>

      <ul>
        <li>
          <Link to="/products">
            Browse Products
          </Link>
        </li>

        <li>
          <Link to="/place-order">
            Place Order
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

export default DomesticDashboard;
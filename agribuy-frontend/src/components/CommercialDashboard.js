import { Link } from "react-router-dom";

function CommercialDashboard() {
  return (
    <div>

      <h1>Commercial Buyer Dashboard</h1>

      <ul>
        <li>
          <Link to="/products">
            Bulk Products
          </Link>
        </li>

        <li>
          <Link to="/place-order">
            Bulk Order
          </Link>
        </li>

        <li>
          <Link to="/orders">
            Order Tracking
          </Link>
        </li>
      </ul>

    </div>
  );
}

export default CommercialDashboard;
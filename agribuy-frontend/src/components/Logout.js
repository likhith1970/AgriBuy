import { useEffect } from "react";

function Logout() {

  useEffect(() => {

    localStorage.removeItem("role");

    window.location.href = "/login";

  }, []);

  return <h2>Logging Out...</h2>;
}

export default Logout;
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Pagina di redirect che forza il reindirizzamento a /blog
const RedirectPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
      navigate(`/blog`);
  }, [navigate]);
  return null;
};

export default RedirectPage;

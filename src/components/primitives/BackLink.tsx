import { useNavigate } from "react-router-dom";
import "../../styles/components/_button.scss";

export function BackLink() {
  const navigate = useNavigate();

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
      className="btn"
    >
      /back
    </a>
  );
}

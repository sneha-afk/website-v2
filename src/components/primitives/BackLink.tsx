import { useNavigate } from "react-router-dom";

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

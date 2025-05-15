import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      style={{
        backgroundColor: "#fff",
        border: "none",
        borderRadius: "50%",
        padding: "10px",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
      title="Volver"
    >
      <FaArrowLeft color="#126636" size={18} />
    </button>
  );
}

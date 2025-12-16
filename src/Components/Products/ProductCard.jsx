// mui icons
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";

// mui components
import Button from "@mui/material/Button";

// contexts
import { ProductDetailsId } from "../../Contexts/ProductDetailsId";

// others
import { useContext } from "react";

export default function ProductCard({ id, price, title, specs, setOpenModal }) {
  function handleOpenModal() {
    setOpenModal(true);
  }

  const { productDetailsId, setProductDetailsId } =
    useContext(ProductDetailsId);

  function dispatchId() {
    setProductDetailsId(id);
  }

  return (
    <div
      id="productCard"
      className="w-full p-[24px] rounded-[16px] mb-[30px] shadow-2xl transition relative overflow-hidden border border-[var(rgba(255, 255, 255, 0.08))]  hover:border-[var(--secondary)] bg-[var(--card-color)] backdrop-blur-sm hover:translate-y-[-10px] transition-all duration-300 group "
    >
      <div className="absolute top-0 left-0 h-[4px] right-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]" />

      <div className="flex flex-col gap-2 pt-1">
        <div className="flex justify-between items-center">
          <button
            className="w-12 h-12 rounded-xl bg-[var(--card-icon-bg)] flex items-center  justify-center transition-all  border shadow-lg border-white/5 group-hover:border-[var(--secondary)] group-hover:bg-[var(--card-icon-bg)]/60
        "
          >
            <AddModeratorOutlinedIcon
              className="text-[var(--primary)]
              group-hover:text-[var(--secondary)]
              transition-all
              duration-300 text-[1.8rem]"
            />
          </button>
          <div className="flex flex-col items-end">
            <span className="text-[var(--white)] text-2xl font-bold font-[var(--font-main)]">
              ${price}
            </span>
            <span className="text-[var(--gray)] text-sm">/month</span>
          </div>
        </div>

        {/* Product Title */}
        <div>
          <h2 className="mb-2 text-2xl text-[var(--white)] font-bold font-[var(--font-main)]">
            {title}
          </h2>
          <p className="text-[var(--gray)] font-[var(--font-main)]">{specs}</p>
        </div>

        <hr
          className="border-[var(--gray)]/20"
          style={{
            margin: "8px 0",
          }}
        />

        {/* Buttons */}
        <div className="flex flex-col justify-between gap-4">
          <Button
            variant="outlined"
            sx={{
              flex: 1,
              border: "1px solid var(--secondary)",
              color: "var(--secondary)",
              fontWeight: "bold",
              borderRadius: "10px",
              padding: "12px",
              fontSize: "0.95rem",
              textTransform: "none",
              fontFamily: "var(--font-main)",
              "&:hover": {
                border: "1px solid var(--secondary)",
                backgroundColor: "rgba(0, 212, 255, 0.08)",
                transform: "translateY(-2px)",
                transition: "all 0.2s ease",
              },
            }}
            startIcon={<InfoOutlinedIcon />}
            onClick={() => {
              handleOpenModal();
              dispatchId();
            }}
          >
            View Details
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "var(--primary)",
              flex: 1,
              fontWeight: "bold",
              padding: "12px",
              borderRadius: "10px",
              fontSize: "0.95rem",
              textTransform: "none",
              fontFamily: "var(--font-main)",
              boxShadow: "0 4px 14px rgba(255, 26, 68, 0.3)",
              "&:hover": {
                bgcolor: "rgba(255, 26, 68, 0.9)",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(255, 26, 68, 0.4)",
                transition: "all 0.2s ease",
              },
            }}
            startIcon={<WalletOutlinedIcon />}
            onClick={() => {
              handleOpenModal();
              dispatchId();
            }}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

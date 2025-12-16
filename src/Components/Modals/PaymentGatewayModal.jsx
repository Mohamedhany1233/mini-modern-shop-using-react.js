// mui componenets
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

// mui icons
import IconButton from "@mui/material/IconButton";

// contexts
import { AllProductsContext } from "../../Contexts/AllProductsContext";
import { ProductDetailsId } from "../../Contexts/ProductDetailsId";

// others
import { useContext } from "react";

export default function PaymentGatewayModal({ openModal, setOpenModal }) {
  function handleCloseModal() {
    setOpenModal(false);
  }

  const products = useContext(AllProductsContext);
  const { productDetailsId } = useContext(ProductDetailsId);
  const product = products.find((p) => p.id === productDetailsId) ?? "";

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      arialabelledby="modal-modal-title"
      ariadescribedby="modal-modal-description"
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      slotProps={{
        backdrop: { timeout: 200 },
      }}
    >
      <Fade in={openModal} timeout={400}>
        <Box
          sx={{
            position: "absolute",
            maxWidth: "500px",
            width: { xs: "92%", sm: "96%" },
            margin: { xs: "0 5px", sm: "0 20px" },
            boxShadow: "0 0 6px var(--secondary)",
            fontSize: { xs: "13px", sm: "15px" },
            maxHeight: { xs: "90vh", sm: "100%" },
            bgcolor: "var(--modal-color)",
            borderRadius: "18px",
            perspective: "1200px",
          }}
          className="fade-payment-modal"
        >
          {/* header */}
          <div className="bg-gradient-to-r from-[var(--modal-color)]  rounded-[18px] to-[#111] p-6 border-b border-white/5 flex justify-between items-center">
            <h2 className="text-md md:text-xl font-bold text-[var(--white)] flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" text-[var(--gold)]"
                aria-hidden="true"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              Secure Payment Gateway
            </h2>
            <IconButton onClick={handleCloseModal}>
              <CloseIcon sx={{ color: "var(--white)" }} />
            </IconButton>
          </div>
          {/* body */}
          <div className="p-8 space-y-6">
            <div className="text-center space-y-2 relative py-2">
              <p className="text-[var(--gray)] text-xs font-bold uppercase tracking-widest">
                Total Amount to Send
              </p>

              <div className="text-5xl font-mono font-black text-white drop-shadow-lg">
                ${product.price}
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-[var(--secondary)] text-xs font-bold">
                <img
                  className="w-4 h-4"
                  alt="USDT"
                  src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=024"
                />
                FIRE20 (USDT) Network
              </div>
            </div>

            <a
              href="#"
              rel="noopener noreferrer"
              className="w-full py-3 md:py-4 rounded-xl bg-gradient-to-r from-[var(--secondary)] to-cyan-600 text-black font-extrabold md:text-lg flex items-center justify-center gap-2 hover:scale-[1.02] shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all uppercase tracking-wide"
              onClick={handleCloseModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                <path d="m21.854 2.147-10.94 10.939" />
              </svg>
              Contact Support to Confirm
            </a>

            <p className="text-center text-[10px] text-[var(--gray)] opacity-50">
              Automated delivery system is standing by. Verification is instant
              upon contact.
            </p>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}

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

export default function ProductDetailsModal({
  openModal,
  setOpenModal,
  setOpenPaymentModal,
}) {
  function handleCloseModal() {
    setOpenModal(false);
  }

  const products = useContext(AllProductsContext);

  const { productDetailsId } = useContext(ProductDetailsId);

  const product = products.find((p) => p.id === productDetailsId);

  const productIdentity = product ? (
    <div>
      <div className="flex items-center gap-[10px]">
        <Typography
          sx={{
            fontSize: "23px",
            color: "white",
            fontWeight: "bold",
            textTransform: "uppercase",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {product.title}
        </Typography>
        <span className="px-3 font-[800] flex items-center rounded bg-[var(--primary)]/20 text-[var(--primary)] text-xs border border-[var(--primary)]/30 h-7">
          PREMIUM
        </span>
      </div>
      <p className="font-mono text-[var(--secondary)] text-[17px] ">
        ${+product.price % 1 === 0 ? `${product.price}.00` : product.price} USD
      </p>
    </div>
  ) : null;

  const englishDetails = product
    ? Object.values(product.details).map((detail, index) => (
        <div key={index} className="flex items-center font-[500]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[var(--secondary)] shrink-0"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="m9 12 2 2 4-4"></path>
          </svg>

          <span style={{ marginLeft: "10px" }}>{detail}</span>
        </div>
      ))
    : null;

  const arabicDetails = product
    ? Object.values(product.arabicDetails).map((detail, index) => (
        <div
          key={index}
          className="flex items-center font-[var(--secondary-font)]"
          dir="rtl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[var(--primary)] shrink-0"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="m9 12 2 2 4-4"></path>
          </svg>

          <span style={{ marginRight: "10px" }}>{detail}</span>
        </div>
      ))
    : null;

  function handlePaymentModal() {
    setOpenModal(false);

    setTimeout(() => {
      setOpenPaymentModal(true);
    }, 400);
  }

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      ariaLabelledby="modal-modal-title"
      ariaDescribedby="modal-modal-description"
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      slotProps={{
        backdrop: { timeout: 100 },
      }}
    >
      <Fade in={openModal} timeout={200}>
        <Box
          sx={{
            position: "absolute",
            maxWidth: "640px",
            width: { xs: "92%", sm: "96%" },
            margin: { xs: "0 5px", sm: "0 20px" },
            borderRadius: { xs: "12px", sm: "15px" },
            boxShadow: "0 0 6px var(--secondary)",
            fontSize: { xs: "13px", sm: "15px" },
            maxHeight: { xs: "90vh", sm: "auto" },
            overflowY: { xs: "auto", sm: "visible" },
          }}
          className="fade-modal"
        >
          {/* Modal Header */}
          <Box
            sx={{
              borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              background: "linear-gradient(to right, #0d0d0d, #1a1a1a)",
              borderRadius: { xs: "12px 12px 0 0", sm: "15px 15px 0 0" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: { xs: "12px", sm: "18px", md: "22px" },
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                gap: { xs: "8px", sm: "12px" },
              }}
            >
              {/* Product title & Price */}
              <Box sx={{ flex: 1, minWidth: 0 }}>{productIdentity}</Box>
              {/* close Modal Button */}
              <IconButton
                color="primary"
                aria-label="add to close modal"
                onClick={handleCloseModal}
                sx={{
                  padding: { xs: "4px", sm: "8px" },
                  minWidth: "auto",
                }}
              >
                <CloseIcon
                  sx={{
                    color: "var(--gray)",
                    fontSize: { xs: "20px", sm: "24px" },
                  }}
                />
              </IconButton>
            </Box>
          </Box>

          {/* Modal Body */}
          <Box>
            <Box
              sx={{
                background: "var(--modal-color)",
                padding: { xs: "12px", sm: "18px", md: "22px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Details */}
              <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:justify-between md:gap-10">
                {/* english Details */}
                <div className="text-[var(--white)] gap-2 flex flex-col flex-1 min-w-0">
                  {englishDetails}
                </div>
                {/* arabic Details */}
                <div
                  className="flex text-[var(--white)] flex-col gap-2 font-[var(--secondary-font)] flex-1 min-w-0"
                  dir="rtl"
                >
                  {arabicDetails}
                </div>
              </div>

              {/* Product Features */}
              <div className="flex flex-col gap-2 mt-4 sm:flex-row sm:gap-3 sm:mt-5">
                {/* feature 1 */}
                <div className="bg-[var(--black)]/30 p-3 rounded-lg border border-white/8 flex-1">
                  <h4 className="text-[var(--white)] font-bold mb-1 flex items-center gap-1.5 text-xs sm:text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[var(--secondary)] flex-shrink-0 sm:w-4 sm:h-4"
                      aria-hidden="true"
                    >
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                      <path d="M15 18H9"></path>
                      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                      <circle cx="17" cy="18" r="2"></circle>
                      <circle cx="7" cy="18" r="2"></circle>
                    </svg>
                    Delivery
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[var(--gray)] leading-relaxed">
                    Instant to 1 Hour depending on stock. Details sent via
                    Telegram/Email.
                  </p>
                </div>

                {/* feature 2 */}
                <div className="bg-[var(--black)]/30 p-3 rounded-lg border border-white/8 flex-1">
                  <h4 className="text-[var(--white)] font-bold mb-1 flex items-center gap-1.5 text-xs sm:text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[var(--primary)] flex-shrink-0 sm:w-4 sm:h-4"
                      aria-hidden="true"
                    >
                      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                    </svg>
                    Support
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[var(--gray)] leading-relaxed">
                    Instant to 1 Hour depending on stock. Details sent via
                    Telegram/Email.
                  </p>
                </div>
              </div>
            </Box>
          </Box>

          {/* Modal Footer */}
          <Box
            sx={{
              borderRadius: { xs: "0 0 12px 12px", sm: "0 0 15px 15px" },
              bgcolor: "#0a0a0a",
            }}
          >
            <Box>
              <div className="border-t border-white/5 p-3 sm:p-4 md:p-[22px]">
                <Button
                  sx={{
                    width: "100%",
                    padding: { xs: "10px 12px", sm: "12px 15px", md: "15px" },
                    cursor: "pointer",
                    borderRadius: { xs: "10px", sm: "12px" },
                    color: "var(--black)",
                    fontFamily: "var(--main-font)",
                    fontWeight: "700",
                    transition: "all ease 0.2s",
                    textTransform: "uppercase",
                    bgcolor: "var(--secondary)",
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "18px",
                    },
                    ":hover": {
                      scale: "1.02",
                    },
                  }}
                  onClick={handlePaymentModal}
                >
                  I Understand – Proceed to Payment
                </Button>
              </div>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

// MUI COMPONENTS
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

// others
import { useState } from "react";

export default function Header() {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  function handleBurgerMenu() {
    setShowBurgerMenu(!showBurgerMenu);
  }

  return (
    <header id="Navbar">
      <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-md border-b-[2px] border-white/5 shadow-2xl">
        <div className="md:max-w-[1400px] m-auto px-2  py-[10px] h-20 flex items-center justify-between">
          <div
            id="logo"
            className="flex items-center gap-2 fade-right cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="lucide lucide-crown text-[var(--gold)] drop-shadow-[0_0_10px_rgba(255,221,0,0.5)]"
            >
              <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
              <path d="M5 21h14"></path>
            </svg>
            <a href="#">
              <span className="uppercase tracking-wide text-2xl font-bold tracking-tighter text-[var(--primary)] drop-shadow-[0_0_3px_var(--primary)]">
                Megatron
              </span>
              <span className="text-2xl tracking-wide font-bold uppercase text-[var(--white)] ">
                Shop
              </span>
            </a>
          </div>

          <IconButton
            aria-label="delete"
            color="primary"
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
            onClick={handleBurgerMenu}
          >
            <MenuIcon sx={{ color: "var(--white)", fontSize: "30px" }} />
          </IconButton>

          {/* Mobile Menu */}
          {showBurgerMenu && (
            <Box
              sx={{
                position: "fixed",
                top: "80px",
                left: 0,
                width: "100vw",
                height: "calc(100vh - 80px)",
                backgroundColor: "rgba(0, 0, 0, 0.95)",
                backdropFilter: "blur(10px)",
                zIndex: 1000000,
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
              }}
            >
              <Button
                variant="text"
                sx={{
                  borderRadius: "999px",
                  color: "var(--gray)",
                  fontWeight: "bold",
                  width: "200px",
                  fontSize: "1.2rem",
                  ":hover": {
                    color: "var(--secondary)",
                  },
                }}
              >
                Support
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "999px",
                  color: "black",
                  fontWeight: "bold",
                  bgcolor: "var(--secondary)",
                  width: "200px",
                  fontSize: "1.2rem",
                  ":hover": {
                    border: "solid 1px var(--secondary)",
                    bgcolor: "transparent",
                    color: "white",
                  },
                }}
              >
                Connect
              </Button>
            </Box>
          )}

          {/* Desktop Menu */}
          <Stack
            id="linksButtons"
            spacing={2}
            direction="row"
            className="fade-left"
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              variant="text"
              sx={{
                borderRadius: "999px",
                color: "var(--gray)",
                fontWeight: "bold",
                width: "130px",
                ":hover": {
                  boxShadow: "0px 0px 0px var(--secondary)",
                },
              }}
            >
              Support
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "999px",
                color: "black",
                fontWeight: "bold",
                bgcolor: "var(--secondary)",
                width: "130px",
                ":hover": {
                  border: "solid 1px var(--secondary)",
                  bgcolor: "transparent",
                  color: "white",
                },
              }}
            >
              Connect
            </Button>
          </Stack>
        </div>
      </nav>
    </header>
  );
}

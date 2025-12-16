// Mui Icons
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <>
      <main id="Home">
        <div className="fade px-[20px] flex flex-col justify-center items-center min-h-[85vh] text-center gap-10 fade homeContainer">
          <div className="inline-flex items-center gap-0.5 py-[8px] px-[30px] rounded-full bg-white/5 border border-white/10 text-[var(--gold)] text-[0.75rem] font-[900] uppercase tracking-normal mb-[1rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            Premium Market
          </div>
          <div className="max-sm:text-md flex text-[39px] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6 text-[var(--primary)]">
            <h1 className="uppercase drop-shadow-[0_0_3px_var(--primary)]">
              Megatron
            </h1>
            <h1 className="text-[var(--white)]  tracking-tighter uppercase">
              Shop
            </h1>
          </div>
          <p className="text-md md:text-2xl max-w-2xl mx-auto text-[var(--gray)] fade">
            Premium Game Servers & Digital Products Instant Delivery • High
            Performance • Secure Payments
          </p>

          <p className="text-[var(--secondary)] font-mono text-[13px] md:text-sm tracking-widest uppercase opacity-80 fade">
            Instant Delivery • 100% Anonymous • FIRE20 Only
          </p>
          <div className="md:flex max-sm:w-full md:flex-row gap-5 flex flex-col">
            <Button
              href="#"
              sx={{
                height: { xs: "56px", md: "64px" },
                fontSize: { md: "1.125rem" },
                width: { sm: "auto" },
                backgroundColor: "var(--low-blue)",
                border: "1px solid var(--secondary)",
                color: "var(--secondary)",
                borderRadius: "12px",
                fontWeight: "bold",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "0 50px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "var(--secondary)",
                  color: "black",
                },
              }}
            >
              <OpenInNewOutlinedIcon />
              <span rel="noreferrer">JOIN TELEGRAM</span>
            </Button>
            <Button
              href="#Prodcuts"
              startIcon={<ArrowDownwardIcon />}
              sx={{
                height: { xs: "56px", md: "64px" },
                fontSize: { md: "1.125rem" },
                width: { sm: "auto" },
                backgroundColor: "var(--primary)",
                color: "var(--white)",
                borderRadius: "12px",
                fontWeight: "bold",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                padding: "0 50px",
                justifyContent: "center",
                gap: "8px",
                cursor: "pointer",
                "&:hover": {
                  scale: "1.03",
                },
              }}
              onClick={() => {
                window.location.href = "#Products";
              }}
            >
              <span rel="noreferrer">BROWSE SHOP</span>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

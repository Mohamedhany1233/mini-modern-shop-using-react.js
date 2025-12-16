export default function Footer() {
  return (
    <footer id="Footer" className="bg-[var(--black)] py-4">
      <div className="md:max-w-[1400px] m-auto p-[40px] mx-auto px-4 flex items-center justify-between p-20">
        <div
          id="footer-logo"
          className="flex items-center gap-2 cursor-pointer"
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
            className="lucide lucide-crown text-[var(--gold)]"
          >
            <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
            <path d="M5 21h14"></path>
          </svg>
          <div className="flex">
            <a className="text-2xl font-bold tracking-tighter text-[var(--primary)] ">
              MEGATRON
            </a>
            <a className="text-2xl font-bold text-[var(--white)] ">SHOP</a>
          </div>
        </div>
        <div className="flex gap-4">
          <a className="text-[var(--gray)] text-sm font-bold hover:text-[var(--secondary)]">
            Terms
          </a>
          <a className="text-[var(--gray)] text-sm font-bold hover:text-[var(--gold)]">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}

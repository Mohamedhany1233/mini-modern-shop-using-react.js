// mui Components
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// components
import ProductCard from "./ProductCard";
import FadeInScroll from "../FadeOnScroll/FadeOnScroll";

// Modals
import { lazy, Suspense, useState } from "react";

const ProductDetailsModal = lazy(() => import("../Modals/ProductDetailsModal"));
const PaymentGatewayModal = lazy(() => import("../Modals/PaymentGatewayModal"));

// contexts
import { AllProductsContext } from "../../Contexts/AllProductsContext";
import { ProductDetailsId } from "../../Contexts/ProductDetailsId";

// others

export default function Products() {
  const [products] = useState([
    // =========================
    // 🎮 GAME SERVERS
    // =========================
    {
      id: 1,
      title: "Minecraft Server",
      price: 10.0,
      specs: "4GB RAM • Unlimited Slots • Anti-DDoS",
      category: "game-servers",
      details: {
        ram: "4GB RAM",
        cpu: "2 vCPU Cores",
        storage: "80GB SSD Storage",
        os: "Panel Access",
        access: "Full Admin Access",
        bestFor: "Perfect for Small Communities",
      },
      arabicDetails: {
        ram: "ذاكرة وصول عشوائي 4 جيجابايت",
        cpu: "نواتين افتراضيتين",
        storage: "تخزين SSD 80 جيجابايت",
        os: "لوحة تحكم متاحة",
        access: "وصول مدير كامل",
        bestFor: "مثالي للمجتمعات الصغيرة",
      },
    },
    {
      id: 2,
      title: "FiveM Server",
      price: 18.0,
      specs: "8GB RAM • High CPU • DDOS Protection",
      category: "game-servers",
      details: {
        ram: "8GB RAM",
        cpu: "4 vCPU Cores",
        storage: "150GB NVMe SSD",
        os: "Windows/Linux",
        access: "Full Root Access",
        bestFor: "Perfect for Roleplay Servers",
      },
      arabicDetails: {
        ram: "ذاكرة وصول عشوائي 8 جيجابايت",
        cpu: "4 نوى افتراضية",
        storage: "تخزين NVMe SSD 150 جيجابايت",
        os: "ويندوز أو لينكس",
        access: "وصول مدير كامل",
        bestFor: "مثالي لسيرفرات التمثيل",
      },
    },
    {
      id: 3,
      title: "Rust Server",
      price: 15.0,
      specs: "6GB RAM • Mod Support • Fast CPU",
      category: "game-servers",
      details: {
        ram: "6GB RAM",
        cpu: "3 vCPU Cores",
        storage: "120GB SSD Storage",
        os: "Linux Optimized",
        access: "Full Admin + FTP Access",
        bestFor: "Perfect for Modded Gameplay",
      },
      arabicDetails: {
        ram: "ذاكرة وصول عشوائي 6 جيجابايت",
        cpu: "3 نوى افتراضية",
        storage: "تخزين SSD 120 جيجابايت",
        os: "لينكس محسن",
        access: "وصول مدير + FTP كامل",
        bestFor: "مثالي للألعاب المعدلة",
      },
    },
    {
      id: 4,
      title: "Ark Survival Server",
      price: 17.0,
      specs: "6GB RAM • Unlimited Players • Mods Enabled",
      category: "game-servers",
      details: {
        ram: "6GB RAM",
        cpu: "3 vCPU Cores",
        storage: "140GB SSD Storage",
        os: "Windows Server",
        access: "Full Admin + Mod Manager",
        bestFor: "Perfect for Survival Gaming",
      },
      arabicDetails: {
        ram: "ذاكرة وصول عشوائي 6 جيجابايت",
        cpu: "3 نوى افتراضية",
        storage: "تخزين SSD 140 جيجابايت",
        os: "ويندوز سيرفر",
        access: "مدير كامل + إدارة الإضافات",
        bestFor: "مثالي لألعاب البقاء",
      },
    },
    {
      id: 5,
      title: "CS2 Server",
      price: 12.0,
      specs: "4GB RAM • 128 Tick • Full Mods",
      category: "game-servers",
      details: {
        ram: "4GB RAM",
        cpu: "2 vCPU Cores",
        storage: "60GB SSD Storage",
        os: "Linux Optimized",
        access: "Full Admin + Plugin Access",
        bestFor: "Perfect for Competitive Play",
      },
      arabicDetails: {
        ram: "ذاكرة وصول عشوائي 4 جيجابايت",
        cpu: "نواتين افتراضيتين",
        storage: "تخزين SSD 60 جيجابايت",
        os: "لينكس محسن",
        access: "وصول مدير + إضافات كامل",
        bestFor: "مثالي للألعاب التنافسية",
      },
    },

    // =========================
    // 🕹️ GAME KEYS
    // =========================
    {
      id: 6,
      title: "GTA V – Rockstar Key",
      price: 14.0,
      specs: "Instant Activation",
      category: "game-keys",
      details: {
        platform: "Rockstar Games Launcher",
        region: "Global Activation",
        delivery: "Instant Digital Code",
        support: "24/7 Key Support",
        warranty: "Full Replacement Warranty",
        bestFor: "Perfect for PC Gaming",
      },
      arabicDetails: {
        platform: "منصة روكستار جيمز",
        region: "تنشيط عالمي",
        delivery: "رمز رقمي فوري",
        support: "دعم مفاتيح 24/7",
        warranty: "ضمان استبدال كامل",
        bestFor: "مثالي للألعاب على الكمبيوتر",
      },
    },
    {
      id: 7,
      title: "Red Dead Redemption 2 – Steam Key",
      price: 19.0,
      specs: "Global Key",
      category: "game-keys",
      details: {
        platform: "Steam Platform",
        region: "Worldwide Activation",
        delivery: "Instant Steam Gift",
        support: "Steam Support Ready",
        warranty: "Working Key Guarantee",
        bestFor: "Perfect for Western Adventure",
      },
      arabicDetails: {
        platform: "منصة ستيم",
        region: "تفعيل عالمي",
        delivery: "هدية ستيم فورية",
        support: "دعم ستيم متاح",
        warranty: "ضمان مفتاح عامل",
        bestFor: "مثالي لمغامرات الغرب",
      },
    },
    {
      id: 8,
      title: "FIFA 24 – EA Key",
      price: 29.0,
      specs: "EA Launcher Activation",
      category: "game-keys",
      details: {
        platform: "EA App / Origin",
        region: "Global Key",
        delivery: "Instant EA Code",
        support: "EA Activation Help",
        warranty: "Replacement if Invalid",
        bestFor: "Perfect for Football Fans",
      },
      arabicDetails: {
        platform: "تطبيق EA / أوريجن",
        region: "مفتاح عالمي",
        delivery: "رمز EA فوري",
        support: "مساعدة تفعيل EA",
        warranty: "استبدال إذا كان غير صالح",
        bestFor: "مثالي لعشاق كرة القدم",
      },
    },
    {
      id: 9,
      title: "Minecraft Java Edition – Key",
      price: 23.0,
      specs: "Mojang Activation",
      category: "game-keys",
      details: {
        platform: "Mojang Account",
        region: "Global Access",
        delivery: "Instant Mojang Code",
        support: "Mojang Migration Help",
        warranty: "Lifetime Access Guarantee",
        bestFor: "Perfect for Creative Builders",
      },
      arabicDetails: {
        platform: "حساب موجانج",
        region: "وصول عالمي",
        delivery: "رمز موجانج فوري",
        support: "مساعدة نقل موجانج",
        warranty: "ضمان وصول مدى الحياة",
        bestFor: "مثالي للبناة المبدعين",
      },
    },

    // =========================
    // 💳 GIFT CARDS
    // =========================
    {
      id: 10,
      title: "Steam Gift Card – 20$",
      price: 20.0,
      specs: "Instant Delivery",
      category: "gift-cards",
      details: {
        value: "$20 Wallet Funds",
        region: "Global / Region Free",
        delivery: "Instant Digital Code",
        redemption: "Steam Wallet Direct",
        validity: "No Expiry Date",
        bestFor: "Perfect for Game Purchases",
      },
      arabicDetails: {
        value: "رصيد 20$ للمحفظة",
        region: "عالمي / بدون قيود",
        delivery: "رمز رقمي فوري",
        redemption: "محفظة ستيم مباشرة",
        validity: "بدون تاريخ انتهاء",
        bestFor: "مثالي لشراء الألعاب",
      },
    },
    {
      id: 11,
      title: "PlayStation Gift Card – 25$",
      price: 25.0,
      specs: "US Region",
      category: "gift-cards",
      details: {
        value: "$25 PSN Credit",
        region: "USA Region Only",
        delivery: "Digital Code Instantly",
        redemption: "PSN Store Redeemable",
        validity: "Never Expires",
        bestFor: "Perfect for PlayStation Gamers",
      },
      arabicDetails: {
        value: "رصيد 25$ لـ PSN",
        region: "الولايات المتحدة فقط",
        delivery: "رمز رقمي فوري",
        redemption: "قابل للاستبدال في متجر PSN",
        validity: "لا ينتهي أبداً",
        bestFor: "مثالي للاعبين بلايستيشن",
      },
    },
    {
      id: 12,
      title: "Xbox Gift Card – 15$",
      price: 15.0,
      specs: "Global",
      category: "gift-cards",
      details: {
        value: "$15 Xbox Credit",
        region: "Global Activation",
        delivery: "Instant Digital Delivery",
        redemption: "Microsoft Account",
        validity: "No Expiration",
        bestFor: "Perfect for Xbox Ecosystem",
      },
      arabicDetails: {
        value: "رصيد 15$ لإكس بوكس",
        region: "تفعيل عالمي",
        delivery: "توصيل رقمي فوري",
        redemption: "حساب مايكروسوفت",
        validity: "بدون انتهاء",
        bestFor: "مثالي لنظام إكس بوكس",
      },
    },
    {
      id: 13,
      title: "Google Play – 10$",
      price: 10.0,
      specs: "Global",
      category: "gift-cards",
      details: {
        value: "$10 Google Play Balance",
        region: "Worldwide Use",
        delivery: "Email Delivery",
        redemption: "Google Account",
        validity: "Permanent Validity",
        bestFor: "Perfect for Apps & Games",
      },
      arabicDetails: {
        value: "رصيد 10$ لجوجل بلاي",
        region: "استخدام عالمي",
        delivery: "توصيل بالبريد الإلكتروني",
        redemption: "حساب جوجل",
        validity: "صلاحية دائمة",
        bestFor: "مثالي للتطبيقات والألعاب",
      },
    },

    // =========================
    // 🪙 IN-GAME CURRENCY
    // =========================
    {
      id: 14,
      title: "Fortnite – 2,800 V-Bucks",
      price: 22.0,
      specs: "Instant Code",
      category: "in-game-currency",
      details: {
        amount: "2,800 V-Bucks",
        platform: "PC/Console/Mobile",
        delivery: "Redeem Code Instantly",
        method: "Epic Games Redeem",
        warranty: "Delivery Guarantee",
        bestFor: "Perfect for Battle Pass",
      },
      arabicDetails: {
        amount: "2,800 ف-باكس",
        platform: "كمبيوتر/كونسول/موبايل",
        delivery: "رمز استبدال فوري",
        method: "استبدال عبر إبك جيمز",
        warranty: "ضمان التوصيل",
        bestFor: "مثالي لبطاقة المعركة",
      },
    },
    {
      id: 15,
      title: "PUBG Mobile – 690 UC",
      price: 12.0,
      specs: "Delivered by Player ID",
      category: "in-game-currency",
      details: {
        amount: "690 Unknown Cash",
        platform: "PUBG Mobile",
        delivery: "Direct to Account",
        method: "Player ID Delivery",
        warranty: "Instant Top-up",
        bestFor: "Perfect for Skins & Crates",
      },
      arabicDetails: {
        amount: "690 UC",
        platform: "ببجي موبايل",
        delivery: "مباشر للحساب",
        method: "توصيل برقم اللاعب",
        warranty: "شحن فوري",
        bestFor: "مثالي للبشرة والصناديق",
      },
    },
    {
      id: 16,
      title: "FreeFire – 500 Diamonds",
      price: 9.0,
      specs: "Instant Delivery",
      category: "in-game-currency",
      details: {
        amount: "500 Diamonds",
        platform: "FreeFire All Servers",
        delivery: "Instant Account Top-up",
        method: "Player ID Method",
        warranty: "Fast Delivery Guarantee",
        bestFor: "Perfect for Characters & Skins",
      },
      arabicDetails: {
        amount: "500 ماسة",
        platform: "فري فاير جميع السيرفرات",
        delivery: "شحن فوري للحساب",
        method: "طريقة رقم اللاعب",
        warranty: "ضمان توصيل سريع",
        bestFor: "مثالي للشخصيات والبشرة",
      },
    },
    {
      id: 17,
      title: "Apex Legends – 2150 Coins",
      price: 19.0,
      specs: "EA Activation",
      category: "in-game-currency",
      details: {
        amount: "2,150 Apex Coins",
        platform: "PC/PS/Xbox",
        delivery: "EA Account Delivery",
        method: "EA Redeem or Direct",
        warranty: "Working Coins Guarantee",
        bestFor: "Perfect for Legends & Cosmetics",
      },
      arabicDetails: {
        amount: "2,150 عملة أبكس",
        platform: "كمبيوتر/بلايستيشن/إكس بوكس",
        delivery: "توصيل لحساب EA",
        method: "استبدال أو مباشر عبر EA",
        warranty: "ضمان عملات عاملة",
        bestFor: "مثالي للأبطال والمظهر",
      },
    },

    // =========================
    // ⭐ SUBSCRIPTIONS
    // =========================
    {
      id: 18,
      title: "Discord Nitro – 1 Month",
      price: 4.5,
      specs: "Instant Gift Link",
      category: "subscriptions",
      details: {
        duration: "1 Month Full Nitro",
        features: "HD Streaming • Custom Emoji",
        delivery: "Instant Gift Link",
        activation: "Discord Redeem",
        warranty: "Valid Code Guarantee",
        bestFor: "Perfect for Discord Users",
      },
      arabicDetails: {
        duration: "شهر كامل من نايترو",
        features: "بث بدقة عالية • إيموجي مخصص",
        delivery: "رابط هدية فوري",
        activation: "استبدال عبر ديسكورد",
        warranty: "ضمان رمز صالح",
        bestFor: "مثالي لمستخدمي ديسكورد",
      },
    },
    {
      id: 19,
      title: "Xbox Game Pass – 1 Month",
      price: 7.0,
      specs: "Global Code",
      category: "subscriptions",
      details: {
        duration: "1 Month Ultimate",
        library: "100+ Games Included",
        delivery: "Digital Code Instantly",
        activation: "Microsoft Account",
        warranty: "Fresh Code Guarantee",
        bestFor: "Perfect for Xbox/PC Gamers",
      },
      arabicDetails: {
        duration: "شهر من ألتيميت",
        library: "أكثر من 100 لعبة متضمنة",
        delivery: "رمز رقمي فوري",
        activation: "حساب مايكروسوفت",
        warranty: "ضمان رمز جديد",
        bestFor: "مثالي للاعبين إكس بوكس/كمبيوتر",
      },
    },
    {
      id: 20,
      title: "PlayStation Plus – 1 Month",
      price: 8.5,
      specs: "US Region",
      category: "subscriptions",
      details: {
        duration: "1 Month Essential",
        benefits: "Online Play • Monthly Games",
        delivery: "PSN Code Instantly",
        activation: "US PSN Account",
        warranty: "Working Code Promise",
        bestFor: "Perfect for PS Multiplayer",
      },
      arabicDetails: {
        duration: "شهر من أساسي",
        benefits: "لعب أونلاين • ألعاب شهرية",
        delivery: "رمز PSN فوري",
        activation: "حساب PSN أمريكي",
        warranty: "وعد برمز عامل",
        bestFor: "مثالي للعب الجماعي على PS",
      },
    },
    {
      id: 21,
      title: "EA Play – 1 Month",
      price: 5.0,
      specs: "Instant Code",
      category: "subscriptions",
      details: {
        duration: "1 Month Full Access",
        games: "EA Library Access",
        delivery: "Instant EA Code",
        activation: "EA App / Origin",
        warranty: "Valid Subscription",
        bestFor: "Perfect for EA Titles",
      },
      arabicDetails: {
        duration: "شهر من وصول كامل",
        games: "وصول لمكتبة EA",
        delivery: "رمز EA فوري",
        activation: "تطبيق EA / أوريجن",
        warranty: "اشتراك صالح",
        bestFor: "مثالي لألعاب EA",
      },
    },
  ]);

  const [category, setCategory] = useState("all");
  const handleCategory = (event, selectedCategory) => {
    if (selectedCategory !== null) {
      setCategory(selectedCategory);
    }
  };

  const [productDetailsId, setProductDetailsId] = useState(0);

  // Product Details Modal
  const [openModal, setOpenModal] = useState(false);

  // Payment Gateway Modal
  const [openPaymentModal, setOpenPaymentModal] = useState(false);

  const productsSeleted = products.map((p) => {
    if (p.category == category) {
      return (
        <FadeInScroll key={p.id}>
          <ProductCard
            id={p.id}
            price={p.price}
            title={p.title}
            specs={p.specs}
            setOpenModal={setOpenModal}
          />
        </FadeInScroll>
      );
    } else if (category == "all") {
      return (
        <FadeInScroll key={p.id}>
          <ProductCard
            id={p.id}
            price={p.price}
            title={p.title}
            specs={p.specs}
            setOpenModal={setOpenModal}
          />
        </FadeInScroll>
      );
    }
  });

  return (
    <AllProductsContext.Provider value={products}>
      <ProductDetailsId.Provider
        value={{
          productDetailsId: productDetailsId,
          setProductDetailsId: setProductDetailsId,
        }}
      >
        <section id="Products" className="bg-[var(--black)]/30 overflow-hidden px-4 sm:px-6 lg:px-8 pb-16">
          <div
            className="w-full max-w-[1400px]"
            style={{
              margin: "auto",
            }}
          >
            <div className="flex justify-center items-center">
              <ToggleButtonGroup
                value={category}
                exclusive
                onChange={handleCategory}
                aria-label="text alignment"
                sx={{
                  gap: { xs: "8px", lg: "10px" },
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  "& .MuiToggleButton-root": {
                    borderRadius: "3px",
                    padding: { xs: "7px 12px", lg: "8px 16px", xl: "8px 20px" },
                    fontSize: { xs: "0.72rem", lg: "0.78rem", xl: "0.8125rem" },
                    color: "var(--gray)",
                    bgcolor: "var(--dark)",
                    fontWeight: "bold",
                  },
                  "& .Mui-selected": {
                    background: "var(--card-color)",
                    color: "var(--secondary) !important",
                    boxShadow: "0px 0px 4px var(--secondary)",
                    border: "1px solid var(--secondary)",
                  },
                  "& .MuiToggleButton-root:not(.Mui-selected)": {
                    transition: "ease 0.3s ",
                    bgcolor: "var(--card-color)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    ":hover": {
                      border: "1px solid var(--secondary)",
                      color: "var(--secondary)",
                    },
                  },
                }}
              >
                <ToggleButton
                  value="all"
                  aria-label="left aligned"
                  variant="outlined"
                >
                  ALL
                </ToggleButton>
                <ToggleButton value="game-servers">Game Servers</ToggleButton>
                <ToggleButton value="game-keys">GAME KEYS</ToggleButton>
                <ToggleButton value="gift-cards">GIFT CARDS</ToggleButton>
                <ToggleButton value="in-game-currency">
                  in game currency
                </ToggleButton>
                <ToggleButton value="subscriptions">subscriptions</ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div
              style={{
                marginTop: "48px",
              }}
              className="grid w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-7 items-stretch"
            >
              {productsSeleted}
            </div>
          </div>
          {/* product details modal */}
          <Suspense fallback={null}>
            {openModal && (
              <ProductDetailsModal
                openModal={openModal}
                setOpenModal={setOpenModal}
                setOpenPaymentModal={setOpenPaymentModal}
              />
            )}
            {openPaymentModal && (
              <PaymentGatewayModal
                openModal={openPaymentModal}
                setOpenModal={setOpenPaymentModal}
              />
            )}
          </Suspense>
        </section>
      </ProductDetailsId.Provider>
    </AllProductsContext.Provider>
  );
}

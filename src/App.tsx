import { useState } from "react";
import pageLogo from "/logo.jpeg";
import WalletConnect from "./components/wallet-connect";
import Faqs from "./components/faqs";
import "./App.css";
import ParticlesComponent from "./components/particle";

const App = () => {
  const [openWallet, setOpenWallet] = useState(false);
  const [openFaqs, setOpenFaqs] = useState(false);

  const closeWallet = () => setOpenWallet(false);
  const closeFaqs = () => setOpenFaqs(false);

  return (
    <div className="app-container h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black via-[#0a2436] to-[#124672]">
      {/* Background Gradient */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "linear-gradient(145deg, black, #0a2436, #124672)",
          zIndex: -2,
        }}
      />

      {/* Logo */}
      <div className="rounded-full w-28 h-28 mb-5">
        <img
          className="rounded-full w-full h-full object-cover"
          src={pageLogo}
          alt="Logo"
        />
      </div>

      {/* Connect Wallet Heading */}
      <h2 className="text-slate-200 text-3xl font-bold my-5">
        Connect to claim
      </h2>

      {/* Connect Wallet Button */}
      <button
        className="button px-6 py-3 bg-blue-600 text-white font-bold rounded-lg"
        onClick={() => setOpenWallet(true)}
      >
        Connect Wallet
      </button>

      {/* FAQ Button */}
      <div className="faq-container mt-5">
        <button
          onClick={() => setOpenFaqs(true)}
          className="px-5 py-2 rounded bg-[#18181b] text-white font-bold cursor-pointer"
        >
          FAQ's
        </button>
      </div>

      {/* Particles Background */}
      <ParticlesComponent />

      {/* Modals for Wallet and FAQs */}
      <WalletConnect openWallet={openWallet} closeWallet={closeWallet} />
      <Faqs openFaqs={openFaqs} closeFaqs={closeFaqs} />
    </div>
  );
};

export default App;

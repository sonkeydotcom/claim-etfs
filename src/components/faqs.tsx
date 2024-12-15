import React from "react";

const content = [
  {
    question: "When can I start claiming my tokens?",
    answer:
      "You can start claiming your tokens on 16th December 2024, 00:00 GMT+1.",
  },
  {
    question: "How much can I claim initially?",
    answer:
      "You will be able to claim 30% of your total claim on 16th December 2024.",
  },
  {
    question: "What is the monthly claim schedule?",
    answer:
      "After the initial claim, 14% of your total tokens will be available for claim on the 6th of each month until 6th May 2025.",
  },
  {
    question: "When will 100% of my tokens be available?",
    answer:
      "By 6th May 2025, 00:00 GMT+1, 100% of your tokens will be available to claim.",
  },
  {
    question: "What happens if I miss a claim?",
    answer:
      "Missed claims will be aggregated, and you can claim the accumulated tokens in subsequent months. You won’t lose any tokens if you miss a monthly claim.",
  },
];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  //   description: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  //   description,
}) => {
  if (!isOpen) return null;
  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg">
        <div
          className="bg-[ linear-gradient(145deg, black, #0a2436, #124672)] rounded-lg shadow-lg h-[500px] overflow-scroll scroll-smooth text-slate-50"
          style={{
            background: "linear-gradient(145deg, black, #0a2436, #124672)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 ">
            <div>
              <h2 className="text-lg text-center font-semibold text-slate-200">
                {title}
              </h2>
              {/* <p className="text-small text-[#757575]">{description}</p> */}
            </div>
          </div>

          {/* Content */}
          <div className="p-4">{children}</div>
        </div>
      </div>
    </>
  );
};

interface FAQProps {
  openFaqs: boolean;
  closeFaqs: () => void;
}

const Faqs: React.FC<FAQProps> = ({ openFaqs, closeFaqs }) => {
  return (
    <Modal
      title="FAQ's"
      isOpen={openFaqs}
      onClose={closeFaqs}
      //   description="Some frequently asked questions about our claim process."
    >
      <div
        style={{
          zIndex: 999999999,
        }}
      >
        <div className="text-sm">
          <p className="text-xm">Notice: Claim Website Now Live !</p>
          <p className="mt-2 text-xm">
            We are pleased to inform you that the claim website is now live and
            available for exploration. While you can browse and familiarize
            yourself with the platform, token claims will not be available
            until:
          </p>
          <p className="mt-2 text-xm">16th December 2024, 00:00 GMT+1</p>
          <p className="mt-2 text-xm">
            On the mentioned date & time, you will be able to claim 30% of your
            total allocation. Following this, additional claims will be
            distributed on a monthly basis:
          </p>
          <p className="mt-2 text-xm">
            14% of your tokens will become available on the 6th of each
            subsequent month until 6th May 2025, 00:00 GMT+1.
          </p>
          <p className="mt-2 text-xm">
            By 6th May 2025, 100% of your tokens will be fully claimable.
          </p>
          <p className="mt-2 text-xm">
            If you miss a monthly claim, there is no need to worry—missed claims
            will automatically be aggregated, allowing you to claim the
            accumulated tokens in subsequent months.
          </p>
        </div>
        {content.map((faq, index) => (
          <div key={index} className="mb-4 text-xs">
            <h5 className="text-sm font-semibold">Q: {faq.question}</h5>
            <p>A: {faq.answer}</p>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default Faqs;

// src/components/FAQ.jsx
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is staking?",
    answer: "Staking is the process of locking your tokens into a smart contract to support the network and earn passive rewards in return.",
  },
  {
    question: "How do I start staking?",
    answer: "Just connect your wallet, go to the Staking page, choose the amount of ALD Tokens to stake, and confirm the transaction.",
  },
  {
    question: "Can I unstake anytime?",
    answer: "Yes, but some pools may have a locking period or early unstaking fee depending on the staking plan.",
  },
  {
    question: "How are rewards calculated?",
    answer: "Rewards are calculated based on the staking duration, the amount staked, and the reward multiplier of the pool.",
  },
  {
    question: "Is it safe to stake my tokens?",
    answer: "Absolutely. All staking operations are handled by audited smart contracts to ensure transparency and security.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-20 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="text-gray-600" />
                ) : (
                  <ChevronDown className="text-gray-600" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

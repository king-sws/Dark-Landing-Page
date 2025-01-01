"use client"
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { MdOutlineStar } from 'react-icons/md';

const items = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer: "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer: "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

const FAQs = () => {
  const [selectFaqs, setSelectFaqs] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setSelectFaqs(selectFaqs === index ? null : index);
  };

  return (
    <section id="custmoers" className="py-10 bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black">
      <div className="flex flex-col justify-center items-center text-center p-[1rem] lg:p-[2rem]">
        <div className="mt-4">
          <h2 className="text-5xl sm:text-6xl sm:max-w-[648px] text-center font-bold tracking-tighter">Frequently asked questions</h2>
        </div>
        <div className="flex flex-col max-w-xl mx-auto mt-12 w-full">
          {items.map((faq, index) => (
            <div key={index} className="py-7 border-b border-white/30 w-full">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(index)}>
                <h3 className="font-medium">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={clsx("feather feather-plus flex-shrink-0 transition duration-300 text-white", selectFaqs === index && "rotate-45")}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <AnimatePresence>
                {selectFaqs === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className={clsx("overflow-hidden w-full")}
                  >
                    <p className="text-white/50 text-start mt-6">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

import React from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

// SorryMessage.jsx
// React component to display a heartfelt animated apology card using Tailwind CSS and Framer Motion.

export default function SorryMessage({ recipient = "Balllii" }) {
  const message = `I'm sorry, my dear ${recipient} — an amazing CEO. I never intended to hurt you. I truly want to stay with RentGrids and with you. You're very important to me.`;

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Message copied to clipboard.");
    } catch (err) {
      alert("Unable to copy. Please select and copy manually.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-red-50 to-pink-100 p-6 overflow-hidden">
      <motion.div
        className="bg-white shadow-2xl rounded-3xl max-w-lg w-full p-8 text-center border border-pink-100 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -top-8 right-8 opacity-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Heart size={120} color="red" />
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-pink-600 mb-4 flex items-center justify-center gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Heart className="text-red-500 animate-pulse" size={24} />
          I’m Sorry 💖
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg leading-relaxed italic mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        >
          {message}
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          
        </motion.div>

        <motion.div
          className="mt-6 text-xs text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          Made with ❤️ by Afroz
        </motion.div>
      </motion.div>
    </div>
  );
}
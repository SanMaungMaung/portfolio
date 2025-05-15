import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

interface CertificateFallbackProps {
  title: string;
  issuer: string;
  issueDate: string;
}

export function CertificateFallback({ title, issuer, issueDate }: CertificateFallbackProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#003366] text-white p-4">
      <FaAward className="text-4xl mb-4 text-[#CC3333]" />
      <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>
      <p className="text-sm text-center mb-1">{issuer}</p>
      <p className="text-xs text-center opacity-75">{issueDate}</p>
    </div>
  );
}
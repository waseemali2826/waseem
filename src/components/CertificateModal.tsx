
import React from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: {
    title: string;
    description: string;
    image: string;
  } | null;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose, certificate }) => {
  if (!isOpen || !certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-scale-in">
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <X className="w-5 h-5" />
        </Button>
        
        <div className="p-6">
          <img 
            src={certificate.image} 
            alt={certificate.title}
            className="w-full h-64 object-cover rounded-xl mb-4"
          />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {certificate.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {certificate.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;

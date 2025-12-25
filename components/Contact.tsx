
import React from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-4xl w-full">
        <div className="space-y-6 mb-16">
          <p className="text-4xl md:text-6xl font-black">+94 76 866 9890</p>
          <p className="text-4xl md:text-6xl font-black">+94 76 566 7410</p>
          <p className="text-3xl md:text-5xl font-black text-[#FFD000]">layers.3dlk@gmail.com</p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center mb-4 hover:scale-110 transition-transform cursor-pointer shadow-lg">
              <Phone size={48} className="text-white" />
            </div>
            <p className="text-2xl font-bold">Call</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center mb-4 hover:scale-110 transition-transform cursor-pointer shadow-lg">
              <MessageCircle size={48} className="text-white" />
            </div>
            <p className="text-2xl font-bold">Whatsapp</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-red-500 flex items-center justify-center mb-4 hover:scale-110 transition-transform cursor-pointer shadow-lg">
              <Mail size={48} className="text-white" />
            </div>
            <p className="text-2xl font-bold">Email</p>
          </div>
        </div>

        <p className="text-2xl md:text-4xl font-light">
          to reach us and get a quotation
        </p>
      </div>
    </section>
  );
};

export default Contact;

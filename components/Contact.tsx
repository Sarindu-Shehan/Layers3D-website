
import React from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="h-full py-10 px-6 flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 text-left">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
              Let's build <br/> 
              <span className="text-[#FFD000]">together.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-md">
              Reach out to us today for custom designs, industrial prototypes, or functional parts.
            </p>
            
            <div className="space-y-4">
               <div className="flex items-center space-x-4 text-2xl font-bold">
                 <MapPin className="text-[#FFD000]" />
                 <span>SRI LANKA</span>
               </div>
               <div className="text-3xl md:text-4xl font-black text-[#FFD000] tracking-tighter">
                  layers.3dlk@gmail.com
               </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 space-y-10 backdrop-blur-2xl">
            <div className="grid grid-cols-1 gap-6">
              <a href="tel:+94768669890" className="flex items-center p-6 rounded-3xl bg-white/5 hover:bg-[#FFD000]/10 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                  <Phone size={28} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase">Call us</p>
                  <p className="text-xl font-bold">+94 76 866 9890</p>
                </div>
              </a>

              <a href="https://wa.me/94765667410" className="flex items-center p-6 rounded-3xl bg-white/5 hover:bg-[#FFD000]/10 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                  <MessageCircle size={28} className="text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase">Whatsapp</p>
                  <p className="text-xl font-bold">+94 76 566 7410</p>
                </div>
              </a>

              <div className="flex items-center p-6 rounded-3xl bg-white/5 group">
                <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center mr-6">
                  <Mail size={28} className="text-red-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase">Email us</p>
                  <p className="text-xl font-bold">layers.3dlk@gmail.com</p>
                </div>
              </div>
            </div>
            
            <p className="text-center font-handwritten text-2xl text-white/40">
              Get your quotation today...
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;

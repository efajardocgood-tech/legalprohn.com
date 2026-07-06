import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = "50493812079"; // Número de Eduardo Fajardo
  const whatsappMessage = "Hola, me gustaría agendar una consultoría legal.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* Botón Flotante de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Fondo animado */}
        <div
          className={`absolute inset-0 bg-[#25D366] rounded-full transition-all duration-300 transform ${
            isHovered ? "scale-110 shadow-2xl" : "scale-100 shadow-lg"
          }`}
          style={{
            boxShadow: isHovered
              ? "0 10px 40px rgba(37, 211, 102, 0.4)"
              : "0 5px 20px rgba(37, 211, 102, 0.3)",
          }}
        />

        {/* Icono */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          <MessageCircle
            className={`w-7 h-7 text-white transition-transform duration-300 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            fill="currentColor"
          />
        </div>

        {/* Tooltip al hover */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-3 bg-[#0A192F] text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-semibold shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200">
            Consultas por WhatsApp
            <div className="absolute top-full right-4 w-2 h-2 bg-[#0A192F] transform rotate-45" />
          </div>
        )}
      </a>

      {/* Pulso de animación para llamar atención (opcional, solo en la primera carga) */}
      <style>{`
        @keyframes pulse-whatsapp {
          0%, 100% {
            box-shadow: 0 5px 20px rgba(37, 211, 102, 0.3);
          }
          50% {
            box-shadow: 0 5px 40px rgba(37, 211, 102, 0.6);
          }
        }

        .whatsapp-pulse {
          animation: pulse-whatsapp 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
}

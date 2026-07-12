'use client';

export default function WhatsAppButton() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseGlow {
          0% { box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0.3); }
          70% { box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4), 0 0 0 10px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .custom-whatsapp-float {
          animation: floatBounce 4s ease-in-out infinite, pulseGlow 2s infinite;
        }
        .custom-whatsapp-float:hover {
          animation: pulseGlow 2s infinite;
        }
      `}} />
      <a
        href="https://wa.me/94770663154"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-[30px] right-[30px] w-[60px] h-[60px] bg-gradient-to-br from-[#25d366] to-[#128c7e] rounded-full flex items-center justify-center z-[999] shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(37, 211, 102, 0.6)] group custom-whatsapp-float"
      >
        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.436.002 9.858-4.394 9.86-9.8 0-2.618-1.01-5.08-2.846-6.92A9.69 9.69 0 0 0 12.008 1.84c-5.44.004-9.863 4.41-9.866 9.802 0 1.514.39 2.99 1.135 4.298l-.994 3.63 3.774-.976zm11.533-6.825c-.299-.149-1.764-.868-2.038-.967-.273-.099-.472-.148-.671.149-.197.297-.767.967-.94 1.164-.173.199-.347.223-.646.074-.299-.15-1.262-.465-2.403-1.477-.887-.79-1.487-1.766-1.66-2.063-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.672-1.62-.92-2.217-.241-.578-.485-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.764-.719 2.012-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
        </svg>
        <span className="absolute right-[75px] bg-[#090d16] text-white px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2.5 group-hover:translate-x-0 pointer-events-none border border-white/10 shadow-lg">
          Chat on WhatsApp
        </span>
      </a>
    </>
  );
}

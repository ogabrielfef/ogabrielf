import WhatsApp from '../publics/whatsAppLogo';

export default function WhatsAppIcon() {
  return (
    <div className="bg-green-500 p-1 fixed z-50 right-4 rounded-full bottom-4 md:right-6 md:bottom-6">
      <a
        className="rounded-full"
        href="https://wa.me/5535998822647"
        target="_blank"
        rel="noreferrer"
      >
        <WhatsApp />
      </a>
    </div>
  );
}

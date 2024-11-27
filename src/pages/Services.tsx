import BgServices from "@/assets/services-bg.jpg";
import TransportServices from "@/components/TransportServices";

export const Services = () => {
  return (
    <div>
      <div className="relative w-full h-64">
        <img
          className="h-full object-cover w-full"
          src={BgServices}
          alt="Aerial view of a container ship at sea"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-6xl font-bold drop-shadow-2xl">
            Usługi
          </p>
        </div>
      </div>
      <div>
        <div className="even:bg-secondary">
          <blockquote className="max-w-xl text-2xl text-center mx-auto text-primary py-8">
            „Zapewniamy kompleksowe rozwiązania logistyczne, które łączą
            szybkość, precyzję i niezawodność.”
          </blockquote>
        </div>
        <TransportServices />
      </div>
    </div>
  );
};

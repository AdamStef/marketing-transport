import BgShip from "@/assets/aerial-view-container-cargo-ship-sea.jpg";
import WorkingPeople from "@/assets/how-to-work-with-different-personalities.jpg";
import CompanyHistory from "@/components/CompanyHistory";

export const About = () => {
  return (
    <div>
      <div className="relative w-full h-64">
        <img
          className="h-full object-cover w-full"
          src={BgShip}
          alt="Aerial view of a container ship at sea"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-6xl font-bold drop-shadow-2xl">O nas</p>
        </div>
      </div>
      <div className="pt-8">
        <div className="flex pb-16 px-24 xl:px-96 gap-5 flex-col items-center xl:justify-center xl:flex-row">
          <div className="flex flex-col gap-8">
            <p>
              <span className="font-semibold text-primary">
                SwiftLink Logistics
              </span>{" "}
              to nowoczesna firma transportowa specjalizująca się w dostarczaniu
              kompleksowych rozwiązań logistycznych dla klientów biznesowych i
              indywidualnych. Dzięki flocie wyposażonej w najnowsze technologie
              oraz zespołowi doświadczonych specjalistów, SwiftLink oferuje
              szybki, bezpieczny i ekologiczny transport na terenie kraju i za
              granicą.
            </p>
            <p className="font-semibold text-primary">
              Nasza misja: "Dostarczamy więcej niż przesyłki – dostarczamy
              zaufanie."
            </p>
          </div>
          <img
            className="w-96 object-cover rounded-lg"
            src={WorkingPeople}
            alt="People working in office"
          />
        </div>
        <div className="bg-secondary px-96 py-16">
          <CompanyHistory />
        </div>
      </div>
    </div>
  );
};

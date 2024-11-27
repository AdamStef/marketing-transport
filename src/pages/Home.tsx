import bgPhoto from "@/assets/trucks-highway-mountain-sunset.jpg";
import transportPhoto from "@/assets/transport2.jpg";
import logisticsPhoto from "@/assets/logistics.jpg";
import magazynPhoto from "@/assets/magazyn.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Home = () => {
  return (
    <div>
      <div
        className="flex justify-end h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgPhoto})` }}
      >
        <div className="bg-secondary shadow-lg p-16 flex flex-col justify-center gap-4 h-24 mt-64 mr-24">
          <h1 className="text-4xl font-semibold">
            Witamy w{" "}
            <span className="text-green-300 text-primary font-bold">
              SwiftLink Logistics
            </span>
          </h1>
          <p className="italic text-lg flex items-end gap-2">
            <Quote size={24} className="-top-2 relative" />
            Zawsze na czas. Zawsze bezpiecznie.
          </p>
        </div>
      </div>
      <div className="max-w-xl relative mx-auto -top-40">
        <Card className="bg-secondary text-secondary-foreground">
          <CardHeader>
            <CardTitle className="text-4xl">Śledź swoją paczkę</CardTitle>
            <CardDescription className="text-xl">
              Możesz już teraz sprawdzić, gdzie aktualnie znajduje się twoja
              paczka!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col">
            <Input className="bg-background" placeholder="Wpisz numer paczki" />
            <Button size="lg" className="mt-4 text-xl mx-auto">
              Sprawdź
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="even:bg-secondary">
        <div className="flex justify-center -mt-24 mb-16">
          <h1 className="text-4xl font-semibold p-8 text-center">
            Kim jesteśmy?
          </h1>
          <p className="max-w-xl">
            <span className="font-semibold text-primary">
              SwiftLink Logistics
            </span>{" "}
            to firma transportowa z wieloletnim doświadczeniem w branży.
            Specjalizujemy się w transporcie międzynarodowym, krajowym i
            lokalnym. Nasza flota składa się z nowoczesnych pojazdów, które
            spełniają najwyższe standardy bezpieczeństwa.
          </p>
        </div>
      </div>
      <div className="bg-primary text-white">
        <div className="grid grid-cols-2 gap-16 p-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-semibold">Nasza misja</h2>
            <p className="text-justify">
              Naszą misją jest dostarczanie usług transportowych na najwyższym
              poziomie. Dzięki naszemu zaangażowaniu i doświadczeniu, możemy
              zapewnić naszym klientom szybkie i bezpieczne dostarczenie ich
              przesyłek w dowolne miejsce na świecie.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-semibold">Nasza wizja</h2>
            <p className="text-justify">
              Nasza wizja jest stałe doskonalenie naszych usług, aby sprostać
              oczekiwaniom naszych klientów. Chcemy być liderem w branży
              transportowej i logistycznej oraz zapewnić naszym klientom
              kompleksowe rozwiązania logistyczne.
            </p>
          </div>
        </div>
      </div>
      <div className="even:bg-secondary">
        <div className="max-w-[60%] mx-auto">
          <h2 className="text-4xl font-semibold p-8 text-center">
            Nasze usługi
          </h2>
          <div className="grid grid-cols-3 gap-4 p-8">
            <Card className="hover:bg-secondary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">Transport</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  className="w-full h-40"
                  src={transportPhoto}
                  alt="Transport"
                />
                <p className="text-center mt-4">
                  Transport międzynarodowy, krajowy i lokalny
                </p>
              </CardContent>
            </Card>
            <Card className="hover:bg-secondary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">Logistyka</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  className="w-full h-40"
                  src={logisticsPhoto}
                  alt="Logistics"
                />
                <p className="text-center mt-4">
                  Usługi logistyczne na najwyższym poziomie
                </p>
              </CardContent>
            </Card>
            <Card className="hover:bg-secondary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">Magazyn</CardTitle>
              </CardHeader>
              <CardContent>
                <img className="w-full h-40" src={magazynPhoto} alt="Magazyn" />
                <p className="text-center mt-4">
                  Magazynowanie towarów w naszych magazynach
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

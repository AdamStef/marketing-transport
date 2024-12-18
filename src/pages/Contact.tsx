import BgContact from "@/assets/contact.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <>
      <div className="relative w-full h-64">
        <img
          className="h-full object-cover w-full"
          src={BgContact}
          alt="Contact"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-6xl font-bold drop-shadow-2xl">
            Kontakt
          </p>
        </div>
      </div>
      <div>
        <div className="even:bg-secondary">
          <div className="flex justify-center items-start gap-24 p-8">
            <div>
              <div>
                <h2 className="text-2xl font-bold">Dane kontaktowe</h2>
                <p className="font-semibold mt-2 mb-1">SwiftLink Logistics</p>
                <ul>
                  <li className="flex items-center gap-2">
                    <Phone size={16} color="hsl(var(--primary))" />
                    123-456-789
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail size={16} color="hsl(var(--primary))" />
                    swiftlink@gmail.com
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={16} color="hsl(var(--primary))" />
                    ul. Transportowa 1, 00-000 Warszawa
                  </li>
                </ul>
                <div className="flex justify-center mt-2">
                  <iframe
                    title="Mapa dojazdu"
                    className="border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.126864971435!2d21.01204931577405!3d52.22967607976091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccb1e7f0c8a5%3A0x4f1d1f9b4e4e4d9e!2sTransportowa%201%2C%2000-000%20Warszawa!5e0!3m2!1spl!2spl!4v1631527636711!5m2!1spl!2spl"
                    width="300"
                    height="225"
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-center mb-2">
                Formularz kontaktowy
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="name">Imię i nazwisko</Label>
                  <Input id="name" type="text" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" />
                </div>
                <div>
                  <Label htmlFor="message">Wiadomość</Label>
                  <Textarea id="message" />
                </div>
                <Button>Wyślij</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="even:bg-secondary">
          <div className="py-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold">Newsletter</h2>
            <p className="text-primary">
              Jeśli chcesz być na bieżąco z naszą ofertą, zapisz się do naszego
              newslettera!
            </p>
            <div className="mt-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex gap-2">
                <Input
                  className="bg-background"
                  placeholder="Wpisz swój email"
                  id="email"
                  type="email"
                />
                <Button>Zapisz się</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

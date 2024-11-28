import { Mail, MapPin, Phone } from "lucide-react";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  return (
    <footer className="w-full border-t z-50">
      <div className="flex justify-center items-start py-8 gap-24">
        <div className="gap-3 flex flex-col">
          <h2 className="text-2xl text-primary text-center">
            Skontaktuj się z nami
          </h2>
          <ul className="ml-5">
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
        </div>
        <div className="gap-3 flex flex-col">
          <h2 className="text-2xl text-primary text-center">Odwiedź nas</h2>
          <ul className="ml-5 flex gap-2">
            <li>
              <SocialIcon network="facebook" />
            </li>
            <li>
              <SocialIcon network="instagram" />
            </li>

            <li>
              <SocialIcon network="linkedin" />
            </li>
          </ul>
        </div>
        {/* <div className="gap-3 flex flex-col">
          <h2 className="text-2xl text-primary text-center">
            Znajdź nas na mapie
          </h2>
          <div className="flex justify-center">
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
        </div> */}
      </div>
      <div className="flex items-center justify-center border-t p-4 h-16">
        <p>&copy; 2024 Adam Stefański</p>
      </div>
    </footer>
  );
};

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import BgPartners from "@/assets/partners-bg.jpg";

import globalSecure from "@/assets/partners/global-secure.png";
import ecotrade from "@/assets/partners/ecotrade.jpg";
import allegro from "@/assets/partners/allegro.png";
import zalando from "@/assets/partners/zalando.jpg";

const partners = [
  { src: globalSecure, alt: "Global Secure" },
  { src: ecotrade, alt: "Ecotrade" },
  { src: allegro, alt: "Allegro" },
  { src: zalando, alt: "Zalando" },
];

const PartnersCarousel = () => {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 5000 })]}
      opts={{ align: "start", loop: true }}
      className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
    >
      <CarouselContent>
        {partners.map((partner, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    className="w-full h-full object-contain"
                    src={partner.src}
                    alt={partner.alt}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

// Typ opinii
type Review = {
  id: number;
  quote: string;
  rating: number; // Liczba gwiazdek
  name: string;
  position: string;
  company: string;
};

// Lista opinii
const reviews: Review[] = [
  {
    id: 1,
    quote:
      "SwiftLink Logistics pomogło nam zredukować czas dostaw o 30%! Dzięki ich niezawodności nasi klienci są zawsze zadowoleni.",
    rating: 5,
    name: "Anna Nowak",
    position: "Kierownik Operacyjny",
    company: "GreenFoods",
  },
  {
    id: 2,
    quote:
      "Profesjonalizm i zaangażowanie SwiftLink to coś, czego można oczekiwać od lidera branży logistycznej. Polecam każdemu!",
    rating: 5,
    name: "Tomasz Wiśniewski",
    position: "CEO",
    company: "TechWave Solutions",
  },
  {
    id: 3,
    quote:
      "Dzięki usługom SwiftLink nasza ekspansja na rynki zagraniczne przebiegła bezproblemowo. Ich system śledzenia przesyłek jest niezastąpiony!",
    rating: 5,
    name: "Marta Zielińska",
    position: "Dyrektor ds. Logistyki",
    company: "StylePro Fashion",
  },
  {
    id: 4,
    quote:
      "Przewóz towarów chłodniczych zawsze był dla nas wyzwaniem, ale SwiftLink poradziło sobie z tym znakomicie. Świetna obsługa i terminowość!",
    rating: 5,
    name: "Robert Jankowski",
    position: "Właściciel",
    company: "FreshMarket",
  },
  {
    id: 5,
    quote:
      "Od lat współpracujemy z SwiftLink i zawsze możemy na nich polegać. To partner, który rozumie nasze potrzeby.",
    rating: 5,
    name: "Katarzyna Lewandowska",
    position: "Manager ds. Operacji",
    company: "PharmaCare",
  },
  {
    id: 6,
    quote:
      "Ich program 'GreenLink' jest nie tylko świetny dla środowiska, ale także pomaga nam w spełnianiu naszych celów zrównoważonego rozwoju.",
    rating: 5,
    name: "Paweł Kaczmarek",
    position: "Specjalista ds. Logistyki",
    company: "EcoTrade",
  },
];

const ReviewCard = (review: Review) => {
  return (
    <Card>
      <CardHeader />
      <CardContent>
        <blockquote>
          <p className="italic">{review.quote}</p>
        </blockquote>
        <div className="text-primary">{"★".repeat(review.rating)}</div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          {review.name} - {review.position}, {review.company}
        </p>
      </CardFooter>
    </Card>
  );
};

export const Partners = () => {
  return (
    <>
      <div className="relative w-full h-64">
        <img
          className="h-full object-cover w-full"
          src={BgPartners}
          alt="partners"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-6xl font-bold drop-shadow-2xl">
            Zaufali nam
          </p>
        </div>
      </div>
      <div className="mt-8 w-full flex flex-col gap-8">
        <div className="even:bg-secondary flex flex-col items-center">
          <h1 className="text-4xl font-bold">Partnerzy</h1>
          <p className="text-primary text-xl pt-2 pb-4">
            Współpracujemy z najlepszymi firmami w branży logistycznej:
          </p>
          <PartnersCarousel />
        </div>
        <div className="even:bg-secondary">
          <div className="max-w-[60%] mx-auto py-8">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Opinie naszych klientów
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviews.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

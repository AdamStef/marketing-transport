import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";

const transportServices = [
  {
    category: "Transport drogowy",
    sections: [
      {
        title: "Transport krajowy",
        description:
          "Dostarczamy towary na terenie całej Polski z zachowaniem najwyższej punktualności.",
        services: [
          "Dostawy lokalne: dostawy na krótkich dystansach, idealne dla sieci handlowych.",
          "Transport międzyregionalny: optymalne trasy dla większych odległości.",
          "Dystrybucja nocna: transport towarów, które muszą dotrzeć przed rozpoczęciem dnia pracy.",
        ],
      },
      {
        title: "Transport międzynarodowy",
        description:
          "Nasz zasięg obejmuje wszystkie kraje Europy – od Skandynawii po Bałkany, dostosowując się do specyficznych wymagań klientów.",
        services: [
          "Kompleksowa obsługa celna.",
          "Transport wielopunktowy: dostawy do wielu lokalizacji w jednej trasie.",
          "Obsługa transportu w strefach niskiej emisji (LEZ) w Europie.",
        ],
      },
      {
        title: "Transport towarów ponadgabarytowych",
        description:
          "Zajmujemy się przewozem ładunków, które przekraczają standardowe wymiary i wagę.",
        services: [
          "Maszyny przemysłowe.",
          "Elementy budowlane (np. belki stalowe).",
          "Pojazdy i sprzęt rolniczy.",
        ],
      },
      {
        title: "Ekologiczny transport miejski",
        description:
          "Zapewniamy transport zeroemisyjny w obszarach miejskich, korzystając z elektrycznych pojazdów.",
        services: [
          "Dostawy do sklepów detalicznych.",
          "Obsługa e-commerce.",
          "Rozwóz żywności i produktów wrażliwych na warunki środowiskowe.",
        ],
      },
    ],
  },
  {
    category: "Transport lotniczy",
    sections: [
      {
        title: "Przesyłki ekspresowe",
        description:
          "Gdy czas odgrywa kluczową rolę, nasze ekspresowe przesyłki lotnicze dostarczają towary najszybciej, jak to możliwe.",
        services: ["Europa: 1–2 dni.", "Świat: 2–3 dni."],
      },
      {
        title: "Transport towarów wrażliwych",
        description:
          "Specjalizujemy się w przewozie towarów wymagających szczególnych warunków, takich jak kontrola temperatury czy delikatne opakowania.",
        services: [
          "Farmaceutyki i szczepionki.",
          "Elektronika użytkowa.",
          "Wyroby jubilerskie.",
        ],
      },
      {
        title: "Czartery lotnicze",
        description:
          "Organizujemy indywidualne czartery lotnicze, aby dostosować usługi do dużych zleceń lub nietypowych przesyłek.",
        services: [
          "Transport dużych ładunków niedopasowanych do standardowych lotów.",
          "Transport w sytuacjach awaryjnych (np. pilne dostawy części zamiennych).",
        ],
      },
    ],
  },
  {
    category: "Transport morski",
    sections: [
      {
        title: "Przewozy kontenerowe",
        description:
          "Zapewniamy ekonomiczny transport dużych ładunków drogą morską w kontenerach standardowych i specjalistycznych.",
        services: [
          "Standardowe kontenery (20' i 40').",
          "Chłodnie do produktów wymagających niskiej temperatury.",
          "Otwarty dach dla ponadgabarytowych ładunków.",
        ],
      },
      {
        title: "Transport drobnicowy (LCL)",
        description:
          "Nie musisz zamawiać całego kontenera – przewozimy ładunki drobnicowe na zasadzie współdzielenia przestrzeni.",
        services: [
          "Obniżenie kosztów transportu.",
          "Możliwość przewozu mniejszych partii towarów.",
        ],
      },
      {
        title: "Usługi door-to-door",
        description:
          "Kompleksowo zajmiemy się Twoim ładunkiem – od odbioru w miejscu nadania po dostawę do finalnego odbiorcy.",
        services: [
          "Transport do i z portu.",
          "Odprawa celna.",
          "Dostawa końcowa transportem drogowym lub kolejowym.",
        ],
      },
    ],
  },
  {
    category: "Magazynowanie i dystrybucja",
    sections: [
      {
        title: "Zarządzanie zapasami",
        description:
          "Zadbamy o przechowywanie i zarządzanie Twoimi zapasami w naszych nowoczesnych magazynach.",
        services: [
          "WMS (Warehouse Management System) do monitorowania stanów w czasie rzeczywistym.",
        ],
      },
      {
        title: "Magazynowanie w kontrolowanych warunkach",
        description:
          "Oferujemy specjalistyczne magazyny dla produktów wrażliwych.",
        services: [
          "Magazyny chłodnicze dla żywności i leków.",
          "Strefy suche dla wyrobów papierniczych i tekstylnych.",
        ],
      },
      {
        title: "Cross-docking",
        description:
          "Minimalizujemy czas przechowywania, przekazując towary bezpośrednio między transportem przychodzącym a wychodzącym.",
        services: [
          "Przyspieszenie realizacji dostaw.",
          "Obniżenie kosztów magazynowania.",
        ],
      },
    ],
  },
];

const TransportServices: React.FC = () => {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-8">
          Nasze Usługi Transportowe
        </h2>
        {transportServices.map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-3xl font-semibold text-secondary-foreground mb-6">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.sections.map((section, idx) => (
                <Card
                  key={idx}
                  className="p-6 rounded-lg shadow-md hover:shadow-lg hover:dark:bg-card/90 transition-shadow"
                >
                  <CardContent>
                    <CardTitle className="text-xl font-bold text-primary">
                      {section.title}
                    </CardTitle>
                  </CardContent>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {section.description}
                    </p>
                    <ul className="list-disc list-inside text-secondary-foreground">
                      {section.services.map((service, serviceIdx) => (
                        <li key={serviceIdx}>{service}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransportServices;

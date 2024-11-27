import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const CompanyHistory = () => {
  const history = [
    {
      title: "Początki: Pomysł, który stał się globalną misją (2008)",
      description: `SwiftLink Logistics rozpoczęło swoją działalność w 2008 roku w Gdańsku, kiedy trójka pasjonatów transportu – Anna Kowalska, Piotr Nowak i Michał Zieliński – postanowiła stworzyć firmę, która zrewolucjonizuje sposób dostarczania towarów w Polsce i Europie. Dostrzegli oni brak usług transportowych, które łączyłyby szybkość, precyzję i dbałość o środowisko. Początkowo firma działała jako lokalny przewoźnik drogowy, obsługując niewielką flotę trzech ciężarówek.`,
      extra: `Ich celem od samego początku było coś więcej niż tylko transport – chcieli dostarczać zaufanie, niezawodność i nowoczesne podejście do logistyki.`,
    },
    {
      title:
        "Rozwój: Od lokalnego przewoźnika do europejskiego lidera (2010–2015)",
      description: `W 2010 roku SwiftLink Logistics zdobyło pierwszy kontrakt międzynarodowy, transportując towary z Polski do Niemiec. Był to moment przełomowy, który otworzył drzwi do dynamicznego rozwoju firmy. W kolejnych latach firma zainwestowała w nowoczesne technologie, takie jak systemy GPS do śledzenia przesyłek w czasie rzeczywistym, co szybko przyciągnęło nowych klientów.`,
      list: [
        "Rozszerzyła swoją flotę do 50 pojazdów.",
        "Otwarła oddziały w Niemczech i Czechach.",
        "Wprowadziła transport lotniczy i morskie przewozy kontenerowe.",
      ],
    },
    {
      title:
        "Nowa era: Ekologiczna transformacja i globalna ekspansja (2016–2020)",
      description: `W 2016 roku SwiftLink Logistics rozpoczęło program „GreenLink”, mający na celu zminimalizowanie śladu węglowego działalności. Firma wdrożyła flotę elektrycznych pojazdów do transportu miejskiego oraz nawiązała współpracę z partnerami oferującymi usługi ekologiczne. Dzięki tym działaniom zdobyła certyfikat ISO 14001 za zarządzanie środowiskowe.`,
      extra: `W tym czasie SwiftLink weszło także na rynki Azji i Ameryki Północnej, podpisując kluczowe umowy z globalnymi liderami e-commerce.`,
    },
    {
      title: "Dziś: Lider innowacji i zrównoważonego rozwoju (2021–obecnie)",
      description: `Obecnie SwiftLink Logistics jest jednym z najbardziej rozpoznawalnych graczy na rynku transportowym w Europie. Firma dysponuje flotą ponad 500 pojazdów, operuje w ponad 50 krajach i zatrudnia blisko 2000 pracowników.`,
      list: [
        "Automatyzację magazynów.",
        "Rozwój usług w obszarze sztucznej inteligencji, takich jak predykcyjne zarządzanie trasami.",
        "Poszerzanie swojej oferty o transport medyczny i chłodniczy.",
      ],
    },
  ];

  return (
    <div className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primary mb-6">
          Historia SwiftLink Logistics
        </h1>
        <div className="space-y-8">
          {history.map((section, index) => (
            <Card
              key={index}
              className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader className="text-2xl font-semibold mb-4">
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{section.description}</p>
                {section.extra && (
                  <p className="text-muted-foreground italic mb-4">
                    {section.extra}
                  </p>
                )}
                {section.list && (
                  <ul className="list-disc list-inside text-muted-foreground">
                    {section.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;

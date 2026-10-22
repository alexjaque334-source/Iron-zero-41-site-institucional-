export interface Plan {
  id: string;
  name: string;
  period: string;
  badge?: string;
  popular?: boolean;
  priceNote?: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface GymInfo {
  name: string;
  tagline: string;
  subtagline: string;
  description: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  instagramHandle: string;
  instagramUrl: string;
  googleMapsUrl: string;
  wazeUrl: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
    reference: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  benefits: string[];
  plans: Plan[];
}

export const GYM_DATA: GymInfo = {
  name: "IRONZERO41 Academia",
  tagline: "NÃO É SÓ ACADEMIA. É EXPERIÊNCIA.",
  subtagline: "VIVA ESSE PADRÃO.",
  description:
    "Musculação de alto nível, treinamento dinâmico, equipamentos novos biomecânicos e estrutura arquitetônica moderna com iluminação hexagonal em Curitiba. Aceitamos Wellhub e TotalPass.",
  whatsappNumber: "5541995967340",
  whatsappDisplay: "(41) 99596-7340",
  instagramHandle: "@ironzero41academia_",
  instagramUrl: "https://www.instagram.com/ironzero41academia_/",
  googleMapsUrl:
    "https://www.google.com/maps/place/Ironzero41academia/@-25.583377,-49.3401763,17z/data=!4m6!3m5!1s0x94dcfddcbba0f30d:0x547f5412c8062cb!8m2!3d-25.5832316!4d-49.3382425!16s%2Fg%2F11zcgjngfw",
  wazeUrl: "https://waze.com/ul?ll=-25.5832316,-49.3382425&navigate=yes",
  address: {
    street: "Rua Marcos Bertoldi, 116",
    neighborhood: "Campo de Santana",
    city: "Curitiba",
    state: "PR",
    cep: "81945-020",
    reference: "Próximo à rotatória do Rio Bonito e ao lado do CAPS",
  },
  hours: {
    weekdays: "06:00 às 22:30",
    saturday: "10:30 às 15:00",
    sunday: "Fechado",
  },
  benefits: [
    "Maquinário Biomecânico de Alta Linha",
    "Área Completa de Pesos Livres & Halteres",
    "Teto Iluminado Hexagonal Exclusivo",
    "Balança de Bioimpedância & Avaliação",
    "Ambiente Climatizado em 2 Níveis",
    "Aceitação Oficial Wellhub (Gympass) & TotalPass",
  ],
  plans: [
    {
      id: "mensal",
      name: "Plano Mensal",
      period: "Sem fidelidade",
      priceNote: "Consulte valor promocional vigente",
      features: [
        "Acesso total à musculação e pesos livres",
        "Treine em qualquer horário de funcionamento",
        "Liberdade total sem contrato de permanência",
        "Acompanhamento de instrutores na sala",
      ],
      ctaText: "Consultar Plano Mensal",
      whatsappMessage:
        "Olá! Conheci a Ironzero41 pelo site e gostaria de saber o valor e detalhes do Plano Mensal.",
    },
    {
      id: "trimestral",
      name: "Plano Trimestral",
      period: "3 meses de treino focado",
      popular: true,
      badge: "Mais Procurado",
      priceNote: "Condição especial com desconto por mês",
      features: [
        "Economia garantida em relação ao mensal",
        "Acesso irrestrito a toda estrutura e mezanino",
        "Avaliação física com bioimpedância inclusa",
        "Foco ideal para consolidação de resultados",
      ],
      ctaText: "Garantir Condição Trimestral",
      whatsappMessage:
        "Olá! Vi a condição do Plano Trimestral no site e quero garantir minha vaga com desconto.",
    },
    {
      id: "anual",
      name: "Plano Anual VIP",
      period: "Compromisso de alta performance",
      badge: "Melhor Custo-Benefício",
      priceNote: "Menor valor por mês + benefícios exclusivos",
      features: [
        "A menor mensalidade proporcional do ano",
        "Avaliações periódicas de bioimpedância",
        "Acesso livre a todos os horários e dias úteis",
        "Possibilidade de trancamento em férias / viagem",
      ],
      ctaText: "Consultar Condições Anual",
      whatsappMessage:
        "Olá! Gostaria de consultar o valor da mensalidade e condições do Plano Anual VIP da Ironzero41.",
    },
  ],
};

export function getGymOpenStatus(): { isOpen: boolean; message: string } {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const curitibaDate = new Date(utc - 3 * 3600000);

  const day = curitibaDate.getDay();
  const hour = curitibaDate.getHours();
  const minute = curitibaDate.getMinutes();
  const timeInMinutes = hour * 60 + minute;

  if (day === 0) {
    return { isOpen: false, message: "Fechado hoje (Domingo) • Reabre seg às 06:00" };
  }

  if (day >= 1 && day <= 5) {
    if (timeInMinutes >= 360 && timeInMinutes < 1350) {
      return { isOpen: true, message: "Aberto agora • Fecha hoje às 22:30" };
    } else if (timeInMinutes < 360) {
      return { isOpen: false, message: "Fechado agora • Abre hoje às 06:00" };
    } else {
      return { isOpen: false, message: "Fechado agora • Reabre amanhã às 06:00" };
    }
  }

  if (day === 6) {
    if (timeInMinutes >= 630 && timeInMinutes < 900) {
      return { isOpen: true, message: "Aberto agora • Fecha às 15:00" };
    } else if (timeInMinutes < 630) {
      return { isOpen: false, message: "Fechado agora • Abre hoje às 10:30" };
    } else {
      return { isOpen: false, message: "Fechado agora • Reabre segunda às 06:00" };
    }
  }

  return { isOpen: false, message: "Consulte horários" };
}

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${GYM_DATA.whatsappNumber}?text=${encoded}`;
}

# IRONZERO41 Academia — Site Institucional Premium & Compacto

Site institucional de alta performance desenvolvido para a **IRONZERO41 Academia** (Curitiba - PR), com estética dark mode de agência, design contemporâneo, pouquíssimo scroll ("one-screen feel"), vídeo cinematográfico em loop e foco total em conversão rápida pelo WhatsApp.

---

## ⚡ Diferenciais do Projeto

- **Pouquíssimo Scroll**: Arquitetura em 2 colunas no desktop e abas instantâneas para celular. Apresenta todas as informações essenciais na primeira tela.
- **Capa Cinematográfica**: Vídeo em loop de 4s extraído do Reel oficial da academia + fallback com frame HD e animação Ken Burns suave.
- **Identidade Autêntica**: Paleta em Preto Carbono (`#0b0c10`), Grafite Metálico (`#12141a`) e Verde Neon (`#c8ff00`) fiel às cores reais do espaço e maquinário.
- **Status em Tempo Real**: Indicador inteligente que calcula automaticamente se a academia está aberta ou fechada com base no fuso de Curitiba (UTC-3).
- **Integração Wellhub & TotalPass**: Área exclusiva destacando a aceitação do benefício corporativo e orientações de check-in.
- **Conversão Direta via WhatsApp**: Cada plano e seção possui links inteligentes que já abrem o WhatsApp com a mensagem personalizada pronta.
- **Localização & Rotas**: Atalhos diretos para o Perfil do Google Maps e Waze com as coordenadas exatas do estabelecimento.

---

## 📂 Como Editar as Informações (Fácil Manutenção)

Todas as informações comerciais, planos, horários, endereço e links estão centralizados em:
`src/data/gymData.ts`

Exemplo para editar:
```typescript
export const GYM_DATA = {
  name: "IRONZERO41 Academia",
  whatsappNumber: "5541995967340",
  whatsappDisplay: "(41) 99596-7340",
  hours: {
    weekdays: "06:00 às 22:30",
    saturday: "10:30 às 15:00",
    sunday: "Fechado",
  },
  plans: [
    // Edite nomes, benefícios e mensagens de WhatsApp aqui
  ]
};
```

---

## 🚀 Como Executar Localmente

1. Entre no diretório do projeto:
   ```bash
   cd site
   ```
2. Instale as dependências (se necessário):
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Para gerar o build de produção otimizado:
   ```bash
   npm run build
   ```
5. Para testar o build estático:
   ```bash
   npm run preview
   ```

---

## 🌐 Publicação (Deploy)

A pasta `dist` gerada pelo comando `npm run build` é 100% estática e otimizada. Pode ser publicada instantaneamente em:
- **Vercel** (arrastar a pasta ou via GitHub)
- **Netlify**
- **Cloudflare Pages**
- Hospedagem tradicional (cPanel / Apache / Nginx)

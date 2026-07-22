# Projeto Site Ruralshop
Landing page e catálogo interativo para a empresa **Ruralshop** em Campo Grande - MS. Desenvolvido para conectar o produtor rural diretamente à equipe de vendas através de atendimento rápido via WhatsApp.

---

## Tecnologias e Dependências

O projeto foi construído utilizando as seguintes tecnologias de ponta:

### **Core & Framework**
* **[React 19](https://react.dev/)**: Biblioteca principal de interface.
* **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior segurança e produtividade.
* **[TanStack Router](https://tanstack.com/router)**: Roteamento declarativo e type-safe.
* **[TanStack Start](https://tanstack.com/router/latest/docs/framework/react/start/overview) & [Nitro](https://nitro.build/)**: Framework full-stack / SSR com suporte a Cloudflare Workers.
* **[Vite 8](https://vitejs.dev/)**: Tooling de build ultrarrápido.

### **Estilização e Componentes**
* **[Tailwind CSS v4](https://tailwindcss.com/)**: Estilização baseada em utilitários.
* **[Lucide React](https://lucide.dev/)**: Conjunto de ícones vetoriais modernos.
* **[Radix UI](https://www.radix-ui.com/)**: Primitivos de UI acessíveis.
* **[Embla Carousel React](https://www.embla-carousel.com/)**: Carrossel responsivo de alta performance para exibição de categorias.

---

## Principais Funcionalidades

1. **Atendimento Direto no WhatsApp**:
   - Links dinâmicos com mensagens pré-formatadas para cada categoria de produto (Sementes, Rações, Fertilizantes, EPIs, Equipamentos, Produtos Veterinários, Defensivos, Selaria, Irrigação e Jardinagem).
2. **Design Responsivo & Alta Performance**:
   - Layout moderno adaptado para dispositivos móveis, tablets e desktops.
3. **Localização e Navegação Integrada**:
   - Integração com o Google Maps para rota direta até a loja física em Campo Grande - MS.
4. **Modal "Trabalhe Conosco"**:
   - Interface simples para envio de currículos.
5. **SEO & Otimização**:
   - Metadados completos OpenGraph e Twitter Cards.
   - Dados estruturados Schema.org (`LocalBusiness`).
   - Conjunto completo de Favicons responsivos (`.ico`, PNGs 16x16, 32x32, 180x180, 192x192, 512x512).

---

## Como Executar o Projeto

### Pré-requisitos
* **Node.js** (v20.19+ ou v22.12+) ou **Bun** (Recomendado).

### Instalação

```bash
# Clone o repositório
git clone https://github.com/guimaraesdeol/zap-rural-facil.git

# Acesse o diretório do projeto
cd zap-rural-facil

# Instale as dependências
bun install   # ou npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
bun run dev   # ou npm run dev
```
Acesse `http://localhost:3000` ou o endereço indicado no terminal.

### Build de Produção

```bash
# Gerar o bundle de produção
bun run build   # ou npm run build
```

---

## Licença

Este projeto é de uso exclusivo para o **Ruralshop Campo Grande LTDA**.
Desenvolvido por **Eduardo Guimarães**.

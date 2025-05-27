# Relatório do Projeto - Site da Hamburgueria

## 1. Título do Projeto
Site da Burger House

## 2. Objetivo da Aplicação
O objetivo do projeto é desenvolver um site profissional e funcional para uma hamburgueria fictícia chamada Burger House, com foco em apresentar o negócio, exibir o menu, compartilhar informações institucionais e permitir que os clientes façam pedidos online. O site é responsivo, utiliza HTML semântico, CSS externo e JavaScript para interatividade, com integração a uma API para armazenamento de pedidos, atendendo a uma experiência de usuário moderna e acessível em diferentes dispositivos.

## 3. Funcionalidades Implementadas
- **Página Inicial (`index.html`)**:
  - Slider interativo com imagens de hambúrgueres, navegável por botões de "anterior" e "próximo" e com troca automática a cada 5 segundos.
  - Apresentação da hamburgueria com um call-to-action para o menu.
- **Página de Produtos (`menu.html`)**:
  - Exibição do menu com itens (hambúrgueres, acompanhamentos e bebidas) em um layout de grid responsivo.
- **Página Institucional (`about.html`)**:
  - Informações sobre a história da hamburgueria, equipe e estrutura física, com imagens dos membros da equipe.
- **Página de Contato/Pedido (`contact.html`)**:
  - Formulário funcional para pedidos com validação em JavaScript (campos obrigatórios: nome, e-mail, item, quantidade).
  - Cálculo dinâmico do valor total com base no item selecionado e na quantidade.
  - Envio de pedidos para o Firebase Firestore.
- **Interatividade com JavaScript**:
  - Menu hamburguer responsivo para dispositivos móveis.
  - Slider funcional na página inicial.
  - Validação e cálculo em tempo real no formulário de pedido.
- **Layout Responsivo**:
  - Design adaptável a dispositivos móveis e desktops usando CSS Grid, Flexbox e media queries.
- **Integração com API**:
  - Armazenamento de pedidos no Firebase Firestore.

## 4. Explicação Técnica do Código (Principais Arquivos)
O projeto é composto por arquivos HTML, CSS e JavaScript, organizados para garantir modularidade e manutenção.

- **`index.html`**:
  - Estrutura: Contém a página inicial com um cabeçalho (`<header>`), seção principal (`<main>`) com o slider e rodapé (`<footer>`).
  - Slider: Implementado com `<div class="slider">` contendo dois `<div class="slide">`, cada um com uma imagem e texto. Botões `.slider-prev` e `.slider-next` controlam a navegação.
  - HTML Semântico: Usa elementos como `<header>`, `<nav>`, `<section>` e `<main>` para acessibilidade.

- **`menu.html`**:
  - Estrutura: Exibe o menu em um grid de itens (`<div class="menu-items">`), com cada item contendo imagem, nome, descrição e preço.
  - Imagens: Usa URLs do Pexels para o item "Refrigerante" e Unsplash para outros itens, garantindo consistência visual.

- **`about.html`**:
  - Estrutura: Apresenta seções para história, equipe e estrutura, com um grid para membros da equipe (`<div class="team">`).
  - Conteúdo: Inclui texto descritivo e imagens ilustrativas dos membros.

- **`contact.html`**:
  - Estrutura: Contém um formulário (`<form id="order-form">`) com campos para nome, e-mail, item (select), quantidade e total (readonly).
  - Integração: Inclui o SDK do Firebase via CDN para enviar pedidos ao Firestore.
  - Validação: Campos obrigatórios são verificados via JavaScript antes do envio.

- **`styles.css`**:
  - Estrutura: Arquivo CSS externo que define estilos globais, layout responsivo e animações.
  - Slider: Usa `display: flex` e `transform` para o movimento do slider, com `.slide` oculto por padrão (`display: none`) e `.slide.active` visível (`display: block`).
  - Responsividade: Media queries ajustam o menu hamburguer e o tamanho do slider para telas menores (≤768px).
  - Reset: Usa Normalize.css para consistência entre navegadores.

- **`script.js`**:
  - Inicialização do Firebase: Configura o Firestore com credenciais do projeto.
  - Menu Responsivo: Adiciona evento de clique ao `.menu-toggle` para exibir/esconder `.nav-links` em dispositivos móveis.
  - Slider: Gerencia a navegação com `prevBtn` e `nextBtn`, atualizando `currentSlide` e aplicando `transform` ao `.slider`. Inclui logs de depuração para facilitar a manutenção.
  - Formulário: Calcula o total dinamicamente (`itemSelect` e `quantityInput`) e envia pedidos ao Firestore com validação de campos.

## 5. API Utilizada
- **Firebase Firestore**:
  - **Descrição**: Banco de dados NoSQL em tempo real hospedado pelo Google Firebase, usado para armazenar os pedidos do formulário.
  - **Link**: [Firebase Firestore](https://firebase.google.com/docs/firestore)
  - **Uso**: Os pedidos são salvos na coleção `orders` com os campos `name`, `email`, `item`, `quantity`, `total` e `createdAt`. O SDK do Firebase é incluído via CDN, e as requisições são feitas diretamente do cliente (`script.js`).
  - **Configuração**: Modo de teste ativado para desenvolvimento, com regras de segurança a serem ajustadas para produção (ex.: exigir autenticação para escrita).

## 6. Armazenamento Local: Tecnologia e Uso
- **Tecnologia**: Não foi utilizado armazenamento local (ex.: `localStorage` ou `sessionStorage`) no projeto.
- **Justificativa**: Os dados dos pedidos são enviados diretamente ao Firebase Firestore, que fornece armazenamento persistente em nuvem. O uso de armazenamento local não foi necessário, pois o objetivo é centralizar os dados em um banco acessível remotamente, permitindo que a hamburgueria visualize os pedidos no Firebase Console.

## 7. Considerações Finais
O site da Burger House atende aos requisitos solicitados, oferecendo uma interface profissional, responsiva e interativa. A integração com o Firebase Firestore garante armazenamento confiável dos pedidos, enquanto o layout responsivo e o HTML semântico melhoram a acessibilidade e a experiência do usuário. O slider na página inicial foi corrigido para garantir navegação funcional, e a imagem de refrigerante foi atualizada para evitar erros 404.

**Pontos Positivos**:
- Design moderno e responsivo, adequado para desktops e dispositivos móveis.
- Integração com Firebase simplifica o gerenciamento de pedidos.
- Código modular e bem documentado, facilitando manutenção.

**Sugestões de Melhorias**:
- Adicionar autenticação no Firebase para proteger o envio de pedidos em produção.
- Implementar uma página para visualizar pedidos salvos (ex.: um painel administrativo).
- Adicionar mais interatividade, como filtros no menu ou notificações por e-mail após o envio do pedido.
- Otimizar imagens para carregamento mais rápido (ex.: usar formatos WebP).

**Deploy no Vercel**:
- O site foi configurado para deploy no Vercel, que hospeda os arquivos estáticos (HTML, CSS, JS). A integração com o Firebase funciona sem necessidade de servidor adicional, já que as requisições são feitas do cliente.
- Para garantir que o slider funcione no Vercel, os logs de depuração no `script.js` ajudam a identificar problemas no ambiente de produção.

Se necessário, posso fornecer ajustes adicionais, como novas funcionalidades ou otimizações para o deploy.
# Site — Dias Locações

Site institucional e de SEO local para a **Dias Locações** (aluguel de betoneira, andaimes e escoras em Rio das Pedras, SP), pronto para publicação no GitHub Pages.

## 1. Estrutura de arquivos

```
dias-locacoes/
├── index.html                                  → Página inicial (/)
├── aluguel-de-betoneira/index.html              → /aluguel-de-betoneira
├── aluguel-de-andaimes/index.html               → /aluguel-de-andaimes
├── aluguel-de-escoras/index.html                → /aluguel-de-escoras
├── aluguel-de-betoneira-rio-das-pedras/index.html
├── aluguel-de-andaimes-rio-das-pedras/index.html
├── aluguel-de-escoras-rio-das-pedras/index.html
├── contato/index.html                           → /contato
├── politica-de-privacidade/index.html           → /politica-de-privacidade
├── sitemap.xml
├── robots.txt
└── assets/
    ├── css/style.css
    ├── js/config.js     → ⭐ único arquivo que você precisa editar com os dados reais
    ├── js/main.js
    └── img/              → imagens placeholder (SVG), substitua por fotos reais
```

Cada página fica em sua própria pasta com um `index.html`, o que faz o GitHub Pages (e praticamente qualquer host estático) servir URLs limpas, sem `.html` — exatamente como pedido na arquitetura de SEO (ex.: `/aluguel-de-betoneira` em vez de `/aluguel-de-betoneira.html`).

## 2. Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex.: `dias-locacoes`).
2. Envie todo o conteúdo desta pasta para a raiz do repositório (não dentro de uma subpasta).
3. No GitHub, vá em **Settings → Pages**, selecione a branch `main` e a pasta `/root`, e salve.
4. Seu site ficará disponível em `https://SEU-USUARIO.github.io/dias-locacoes/`.
5. **Importante:** depois de saber a URL final (ou se for usar um domínio próprio), atualize:
   - `siteUrl` em `assets/js/config.js`;
   - a tag `<link rel="canonical">`, as tags Open Graph e o JSON-LD em **cada** página (busque por `SEU-USUARIO.github.io/dias-locacoes` e troque pela URL real — um "buscar e substituir" no editor de código resolve rapidamente);
   - as URLs dentro de `sitemap.xml` e `robots.txt`.
6. Se for usar um domínio próprio, adicione um arquivo `CNAME` na raiz do repositório com o domínio (siga a documentação do GitHub Pages).

## 3. O que editar para colocar os dados reais da empresa

Praticamente tudo que muda com frequência foi centralizado em **`assets/js/config.js`**:

- `whatsapp` — número no formato internacional, só números (ex.: `"5519999999999"`).
- `phone`, `address`, `cep`, `openingHours` — preenchidos automaticamente em Contato e no rodapé assim que você informar os valores.
- `googleMapsEmbedUrl` — cole aqui a URL de "Incorporar mapa" do Google Maps para o mapa aparecer na página de Contato.
- `googleMapsLinkUrl` — link direto para o Perfil da Empresa no Google.
- `social` — links de Instagram/Facebook, se desejar exibi-los futuramente.

Enquanto esses campos estiverem vazios, o site mostra textos como "[a preencher]" no lugar, para deixar claro o que falta configurar — nenhuma informação foi inventada.

### Dados que aparecem em mais de um lugar (JSON-LD)
Os campos de **Schema.org (JSON-LD)** — endereço, telefone, URL, horário de funcionamento (`openingHours`) e perfis (`sameAs`) — estão marcados como `"PREENCHER"` diretamente no HTML de cada página (na página inicial e em Contato para o `LocalBusiness`, e em cada página de serviço para o `Service`). Isso é intencional: mecanismos de busca leem esse bloco antes de qualquer JavaScript rodar, então esses valores precisam estar escritos no HTML, e não apenas no `config.js`. Ao preencher os dados reais, atualize os dois lugares (config.js para a exibição visual, e o JSON-LD de cada página para os mecanismos de busca).

## 4. Imagens

As imagens em `assets/img/` são **placeholders em SVG**, leves e claramente identificados como "foto ilustrativa — substituir". Nenhuma foto real ou falsa da empresa foi utilizada. Para substituir:

1. Exporte as fotos reais dos equipamentos em `.webp` (formato leve, recomendado para performance).
2. Nomeie os arquivos de forma amigável para SEO, por exemplo:
   - `aluguel-betoneira-rio-das-pedras.webp`
   - `aluguel-andaimes-rio-das-pedras.webp`
   - `aluguel-escoras-rio-das-pedras.webp`
   - `dias-locacoes.jpg` (imagem usada no Open Graph/compartilhamento)
3. Coloque os arquivos em `assets/img/` e atualize as tags `<img>`/`<meta property="og:image">` correspondentes, mantendo o `alt` descritivo já usado como referência.

## 5. Google Search Console e Google Perfil da Empresa

- Depois de publicar, cadastre a propriedade no [Google Search Console](https://search.google.com/search-console) usando a URL final do site e envie o `sitemap.xml`.
- O `robots.txt` já aponta para o sitemap e libera a indexação de todo o site.
- Use a mesma URL do site e os mesmos dados de NAP (nome, endereço, telefone) no **Perfil da Empresa no Google** para manter consistência, o que ajuda o SEO local.

## 6. Política de Privacidade

O arquivo `politica-de-privacidade/index.html` já deixa campos preparados para quando (se) você adicionar Google Analytics, Google Tag Manager, cookies, formulário com envio real ou ferramentas de anúncios. Atualize essa página assim que qualquer uma dessas ferramentas for implementada — hoje o site não usa nenhuma delas.

## 7. Performance e acessibilidade já aplicadas

- HTML semântico, CSS único (sem frameworks) e JavaScript mínimo, sem bibliotecas externas.
- Fontes do sistema (sem carregamento de fontes externas) para carregar mais rápido.
- Menu mobile, botão de WhatsApp flutuante e áreas clicáveis grandes, pensados para celular.
- FAQ em `<details>/<summary>` nativos (sem JavaScript extra) para acessibilidade e leveza.
- Foco de teclado visível e link "Pular para o conteúdo" em todas as páginas.

## 8. Estratégia de SEO usada (resumo)

- **Arquitetura**: cada serviço tem uma página "guarda-chuva" (ex.: `/aluguel-de-betoneira`) e uma página local dedicada (ex.: `/aluguel-de-betoneira-rio-das-pedras`), com conteúdo distinto entre elas para evitar canibalização e conteúdo duplicado.
- **Palavra-chave por página**: cada página tem um foco principal único (mapa de palavras-chave), reduzindo a concorrência interna entre páginas do próprio site.
- **Interlinkagem**: Home → Serviço → Serviço Local, além de links cruzados entre os três serviços e link para Contato em todas as páginas, distribuindo relevância interna.
- **Breadcrumbs + Schema**: trilhas de navegação visíveis e marcadas com `BreadcrumbList`, mais `LocalBusiness`, `Service` e `FAQPage` (somente onde há FAQ visível), sem inventar avaliações, notas ou dados não fornecidos.
- **Conteúdo natural**: textos escritos para pessoas reais, sem repetição artificial de palavras-chave, sem alegações de economia ou benefícios não comprovados.

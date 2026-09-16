# RS Concursos — Pedagogo Aparecida de Goiânia 2026

Landing pages de alta conversão criadas para o preparatório **Professor / Pedagogo da Prefeitura de Aparecida de Goiânia 2026** do Instituto Rodolfo Souza.

Este repositório contém **3 opções visuais completas e independentes** para apresentação ao cliente e teste de conversão (A/B), além dos modelos prontos para importação direta no **Elementor Pro**.

---

## 🌐 Prévia Online das 3 Opções

Ao publicar via GitHub Pages, as 3 opções podem ser visualizadas interativamente no computador ou celular:

| Opção | Proposta Visual | Arquivo Prévia | Arquivo Elementor Pro |
| :--- | :--- | :--- | :--- |
| **Opção 1: Branca Editorial** | Fundo 100% branco limpo, minimalista, estilo artigo/notícia acadêmica. | `index-opcao1-editorial.html` | `elementor-opcao1-editorial.json` |
| **Opção 2: Dark Petróleo & Esmeralda** | Fundo escuro azul petróleo (`#020607` a `#06202a`) com esmeralda luminoso e dourado, **alinhado ao banner oficial do site e da loja**. | `index-opcao2-dark.html` | `elementor-opcao2-dark.json` |
| **Opção 3: Light Premium** | Cores claras contemporâneas: fundo pérola/off-white, cartões brancos elevados, detalhes em **Verde Esmeralda (`#0d9488`)**, **Âmbar Dourado (`#d97706`)** e faixa de horário em **Verde Floresta Profundo (`#042f2e`)**. | `index-opcao3-light-premium.html` | `elementor-opcao3-light-premium.json` |

> 💡 Cada arquivo HTML possui um seletor flutuante no rodapé para alternar entre as 3 opções com apenas 1 clique.

---

## 📸 Comparativo Visual

### Opção 2: Dark Petróleo & Esmeralda (Oficial do Banner)
![Opção 2 Dark Petróleo](screenshot-dark-hero.png)

### Opção 3: Light Premium (Acadêmico Contemporâneo)
![Opção 3 Light Premium](screenshot-opcao3-hero.png)

---

## 🚀 Integração com Elementor Pro

Todas as páginas foram projetadas **sem cabeçalho e sem rodapé internos**, configuradas no modo **Elementor Largura Total** (`elementor_header_footer`). 

Isso garante que o WordPress/Elementor injete automaticamente o cabeçalho global e o rodapé global configurados no Theme Builder do site, sem duplicar elementos e sem margens laterais indesejadas.

### Como importar no WordPress:
1. Acesse o painel: `https://institutorodolfosouza.com/wp-admin/`
2. Vá em **Modelos > Modelos Salvos > Importar Modelos**.
3. Selecione o arquivo `.json` da opção desejada (`elementor-opcao1-editorial.json`, `elementor-opcao2-dark.json` ou `elementor-opcao3-light-premium.json`).
4. Crie uma nova página em rascunho com o título: **"Pedagogo — Aparecida de Goiânia"** e slug `pedagogo-aparecida`.
5. Garanta que o Modelo da Página esteja selecionado como **Elementor Largura Total**.
6. Edite com o Elementor, insira o modelo da biblioteca e clique em **Publicar**.

---

## 📦 Conteúdo do Repositório

- `rs-pedagogo-elementor.zip`: Pacote consolidado contendo todos os modelos Elementor, HTMLs, CSSs e imagens otimizadas em WebP.
- `config.json`: Fonte única das datas, preços de lotes, telefone e WhatsApp.
- `app.js`: Script de atualização automática dos lotes conforme o fuso de Brasília e geração do link direto para WhatsApp com os dados do formulário.
- `rodrigo-gondim.jpg`, `martinha-simoes.jpg`: Fotos oficiais dos professores com uniforme RS.
- `inst-fachada.webp`, `inst-salas.webp`, `inst-alunos.webp`, `inst-logo.webp`: Fotos institucionais de alta performance e carregamento instantâneo.
- `backup-versao-branca/`: Pasta de segurança contendo o histórico integral da primeira versão branca construída.

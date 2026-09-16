# RS Concursos — Pedagogo Aparecida 2026 (Documento de Entrega Oficial)

## 📌 Situação do Projeto

A versão visual **Opção 3: Light Premium / Acadêmico Contemporâneo** foi aprovada pelo cliente e consolidada como o **padrão oficial de produção**.

Todos os arquivos principais da raiz (`index.html`, `style.css`, `elementor-pedagogo.json`, `pagina-elementor.html` e `pedagogo-aparecida-completo.html`) estão agora configurados exclusivamente com este design.

---

## 🎨 Especificações da Versão Oficial (Light Premium)

- **Estética:** Fundo claro refinado (`#f8fafc`), cartões brancos destacados, acentos em Verde Esmeralda (`#0d9488`) e Âmbar Dourado (`#d97706`).
- **Ritmo Visual:** Faixa de cronograma em Verde Floresta (`#042f2e`) para alta legibilidade dos horários (`8h às 11h` / `13h às 16h`).
- **Formulário de Matrícula:** Card com borda superior dourada, wizard interativo em 3 etapas (Modalidade → Experiência → Contato) e botão de ação contínua para WhatsApp oficial.
- **Tipografia:** Fonte *RS Montserrat* incorporada em Base64 diretamente no CSS, eliminando dependências externas e lentidão.
- **Elementor Template:** Definido como `elementor_header_footer` (Elementor Largura Total). Sem cabeçalho nem rodapé internos, permitindo que o cabeçalho e rodapé globais do tema apareçam sem duplicidade.

---

## 📁 Arquivos Oficiais

- `index.html`: Landing page oficial pronta para visualização local e publicação em GitHub Pages.
- `style.css`: Folha de estilo oficial da versão Light Premium.
- `elementor-pedagogo.json`: Modelo oficial para importação no Elementor Pro.
- `pagina-elementor.html`: Conteúdo formatado para widget HTML do Elementor (caso não utilize a importação direta de modelo).
- `pedagogo-aparecida-completo.html`: Arquivo independente com todos os estilos e scripts embutidos.
- `config.json`: Configuração central das turmas (datas de início, viradas de lote, valores e WhatsApp).
- `app.js`: Script de atualização automática dos lotes conforme o fuso de Brasília e geração do link direto para WhatsApp com os dados do formulário.
- `rs-pedagogo-elementor.zip`: Arquivo zip completo com todos os modelos, scripts e imagens.
- `backup-versao-branca/`: Pasta de segurança com os arquivos históricos da versão inicial.

---

## 🛠️ Instruções para Importação no WordPress / Elementor

1. Acesse o painel do WordPress: `https://institutorodolfosouza.com/wp-admin/`.
2. Certifique-se de que o **Elementor Pro** está ativo.
3. No menu lateral, acesse **Modelos > Modelos Salvos > Importar Modelos**.
4. Selecione o arquivo **`elementor-pedagogo.json`**.
5. Crie uma nova página:
   - **Título:** `Pedagogo — Aparecida de Goiânia`
   - **Slug:** `pedagogo-aparecida`
   - **Modelo da Página:** `Elementor Largura Total`
6. Abra no editor do Elementor e adicione o modelo importado via biblioteca (**Meus Modelos** > **Inserir**).
7. Verifique se o formulário nativo do Elementor Pro está configurado com a ação **Coletar envios** (`save-to-database`).
8. Faça um envio de teste para verificar se o registro aparece em **Elementor > Envios**.
9. Publique a página.

---

## 🌐 Links para Demonstração Online

- **Versão Oficial (Produção):** https://irs-concursos.github.io/rs-pedagogo-aparecida/
- **Opção 1 (Branca Editorial):** https://irs-concursos.github.io/rs-pedagogo-aparecida/index-opcao1-editorial.html
- **Opção 2 (Dark Petróleo):** https://irs-concursos.github.io/rs-pedagogo-aparecida/index-opcao2-dark.html

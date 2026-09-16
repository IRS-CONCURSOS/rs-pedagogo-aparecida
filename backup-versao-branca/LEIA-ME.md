# RS Concursos — Pedagogo Aparecida 2026

## Situação

Página e modelo Elementor construídos. Prévia visual testada localmente em computador e celular de 390 px. A publicação e o teste de gravação real dos contatos ainda não foram realizados: o WordPress exige login.

## Arquivos

- `index.html` + `style.css`: prévia local completa (sem cabeçalho e sem rodapé internos, pronta para o Elementor). O formulário da prévia NÃO envia ou armazena contatos. Informa explicitamente essa limitação ao enviar.
- `elementor-pedagogo.json`: modelo de página para importar no Elementor configurado como `elementor_header_footer` (Elementor Largura Total). Cabeçalho e rodapé foram removidos do conteúdo da página para que o Elementor/tema exiba seus cabeçalhos e rodapés automáticos globais.
- `pagina-elementor.html`: conteúdo visual alternativo para widget HTML; sozinho NÃO contém o formulário nativo. Preferir importar o JSON completo.
- `pedagogo-aparecida-completo.html`: arquivo HTML único e autônomo com estilos embutidos e scripts prontos.
- `config.json`: fonte única das datas, preços, identificação do curso e WhatsApp. Executar `python3 build.py` após alterar a configuração para atualizar os artefatos.
- `app.js`: atualização dos lotes em Brasília e integração com confirmação do formulário.
- `rodrigo-gondim.jpg`, `martinha-simoes.jpg`: fotos oficiais dos professores com uniforme RS.
- `rodrigo-gondim-avatar.jpg`, `martinha-simoes-avatar.jpg`: versões otimizadas para os avatares circulares do hero.
- `inst-fachada.webp`, `inst-salas.webp`, `inst-alunos.webp`, `inst-logo.webp`: fotos institucionais de alta performance e carregamento instantâneo.

## Instalação no WordPress / Elementor

1. Entrar em https://institutorodolfosouza.com/wp-admin/.
2. Confirmar Elementor Pro ativo e a funcionalidade de coletar envios disponível.
3. Importar `elementor-pedagogo.json` na biblioteca de modelos (Modelos > Modelos Salvos > Importar).
4. Criar uma nova página em rascunho com o título “Pedagogo — Aparecida de Goiânia” e slug `pedagogo-aparecida`. O modelo da página já está configurado como **Elementor Largura Total** (`elementor_header_footer`), garantindo que o cabeçalho e o rodapé automáticos globais do seu Elementor apareçam perfeitamente no topo e no rodapé do site sem duplicação.
5. Inserir o modelo importado na página. Conferir na prévia externa ao editor o formulário dentro do painel de matrícula.
6. No formulário “Pedagogo Aparecida 2026”, conferir três etapas e a ação “Coletar envios”. Não adicionar disparo automático de e-mail.
7. Fazer um cadastro de teste claramente identificado e confirmar sua presença no painel Elementor > Envios. Testar retorno de erro sem mensagem falsa de sucesso, telefone obrigatório e e-mail opcional.
8. Confirmar que a mensagem do WhatsApp conserva nome, modalidade e experiência mesmo após o Elementor limpar os campos. Não enviar a mensagem de teste ao atendimento.
9. Confirmar datas, imagens, formato mobile e links. Título SEO: “Pedagogo Aparecida de Goiânia | RS Concursos”. Descrição: “Preparatório RS para Pedagogo em Aparecida de Goiânia. Aulas presenciais e ao vivo pela internet. Conheça a equipe, horários e condições.”
10. Publicar e verificar o endereço final. Nenhuma alteração na página policial existente é necessária.

## Verificações executadas

- Navegação pelas três etapas da prévia, escolha de modalidade e experiência, campos de contato e consentimento.
- Prévia sem servidor de cadastro mantém respostas e informa que nenhum contato foi enviado.
- Mensagem do WhatsApp codificada corretamente; não contém pontuação interna nem parâmetros de análise com dados pessoais.
- Transições 18/09 23:59:59 → 19/09 00:00 e 25/09 23:59:59 → 26/09 00:00 no fuso America/Sao_Paulo.
- JavaScript com sintaxe válida.
- Sem rolagem horizontal no viewport de 390 px.

## Limites e manutenção

- A integração nativa depende de Elementor Pro e deve ser verificada no site antes da publicação. O JSON não é evidência de registro real dos contatos.
- Fotos são referenciadas em URLs públicas do Instituto; podem ser importadas para a biblioteca de mídia para independência futura.
- O acesso às gravações anunciado refere-se ao presencial. O preço do telepresencial permanece sob consulta.
- Não há promessa de carga horária total, material extra, aprovação ou data de encerramento.
- O lote é calculado com o relógio do navegador convertido para Brasília. O atendimento confirma o valor vigente e a disponibilidade.

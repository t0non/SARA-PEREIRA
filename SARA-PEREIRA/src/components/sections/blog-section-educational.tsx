"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Blogs educativos baseados nos serviços da Sara Pereira
    const educationalBlogs: BlogPost[] = [
      {
        id: '1',
        title: "Terceirização de DP: Quando e Como Implementar na sua Empresa",
        excerpt: "Descubra os sinais de que sua empresa precisa terceirizar o Departamento Pessoal e o passo a passo para uma implementação bem-sucedida.",
        author: "Sara Pereira",
        date: "20 de Março, 2024 às 14:30",
        readTime: "8 min",
        category: "BPO",
        image: "https://files.catbox.moe/exz3g9.jpg",
        published: true,
        content: `# Terceirização de DP: Quando e Como Implementar

A terceirização do Departamento Pessoal deixou de ser uma opção para se tornar uma necessidade estratégica no mercado atual.

## Sinais de que sua empresa precisa terceirizar o DP

### 1. Sobrecarga Operacional
- Processos manuais consomem tempo excessivo
- Equipe interna focada em tarefas repetitivas
- Erros frequentes em cálculos e entregas

### 2. Custos Elevados
- Despesas com equipe especializada
- Investimentos em tecnologia e sistemas
- Custos com treinamento constante

### 3. Riscos Trabalhistas
- Multas e autuações recorrentes
- Processos trabalhistas abertos
- Dificuldade em manter conformidade

## Como Implementar

### Fase 1: Diagnóstico
- Mapeamento de processos atuais
- Identificação de gargalos
- Análise de custos e benefícios

### Fase 2: Escolha do Parceiro
- Verificação de credibilidade
- Análise de casos de sucesso
- Avaliação tecnológica

### Fase 3: Transição
- Planejamento detalhado
- Migração gradual de processos
- Treinamento das equipes

## Benefícios Esperados

- Redução de até 40% nos custos operacionais
- Zero autuações trabalhistas
- Foco estratégico no core business
- Escalabilidade garantida`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: '2',
        title: "Auditoria Trabalhista: Guia Completo para Evitar Multas",
        excerpt: "Aprenda como conduzir uma auditoria trabalhista completa e identificar riscos antes que se tornem problemas financeiros.",
        author: "Sara Pereira",
        date: "18 de Março, 2024 às 10:15",
        readTime: "10 min",
        category: "Compliance",
        image: "https://files.catbox.moe/cz3d2g.webp",
        published: true,
        content: `# Auditoria Trabalhista: Guia Completo

Uma auditoria trabalhista preventiva pode economizar milhões em multas e processos.

## O que é Auditoria Trabalhista

É uma análise detalhada de todos os processos e documentos do Departamento Pessoal para garantir conformidade total com a legislação.

## Áreas Críticas de Análise

### 1. Documentação
- Contratos de trabalho
- Termos aditivos
- Acordos coletivos
- Periódicos de férias

### 2. Cálculos
- Folha de pagamento
- Rescisões contratuais
- Adicionais e benefícios
- Impostos e contribuições

### 3. Obrigações Acessórias
- eSocial
- GFIP
- CAGED
- RAIS

## Passo a Passo da Auditoria

### 1. Planejamento
- Definir escopo
- Montar equipe
- Estabelecer cronograma

### 2. Coleta de Dados
- Reunir documentos
- Entrevistar responsáveis
- Analisar sistemas

### 3. Análise
- Verificar conformidade
- Identificar riscos
- Quantificar impactos

### 4. Relatório
- Apontar não conformidades
- Sugerir correções
- Priorizar ações

## Riscos Comuns Encontrados

- Cálculos incorretos de horas extras
- Classificação errada de vínculos
- Omissão de benefícios obrigatórios
- Atraso em entregas obrigatórias`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: '3',
        title: "Migração de Sistemas: Como Trocar a Folha de Pagamento Sem Perder Dados",
        excerpt: "Guia prático para migrar seu sistema de folha de pagamento com segurança e zero perda de informações.",
        author: "Sara Pereira",
        date: "15 de Março, 2024 às 16:45",
        readTime: "12 min",
        category: "Tecnologia",
        image: "https://files.catbox.moe/emdhea.jpg",
        published: true,
        content: `# Migração de Sistemas: Folha de Pagamento

Trocar de sistema de folha é um projeto crítico que exige planejamento cuidadoso.

## Por Que Migrar?

### Sinais de Sistema Obsoleto
- Lentidão operacional
- Falta de integrações
- Dificuldade de backup
- Sem suporte técnico

### Benefícios da Migração
- Automação de processos
- Relatórios em tempo real
- Conformidade automática
- Mobilidade e acesso remoto

## Planejamento da Migração

### 1. Diagnóstico Atual
- Mapear todos os processos
- Levantar customizações
- Identificar dependências
- Documentar integrações

### 2. Escolha do Novo Sistema
- Análise de funcionalidades
- Compatibilidade com eSocial
- Custo-benefício
- Suporte do fornecedor

### 3. Preparação dos Dados
- Limpeza da base
- Padronização de campos
- Validação de informações
- Backup completo

## Processo de Migração

### Fase 1: Configuração
- Instalação do sistema
- Parametrização inicial
- Carga de tabelas
- Configuração de usuários

### Fase 2: Migração
- Exportação de dados
- Validação de informações
- Importação controlada
- Conciliação de saldos

### Fase 3: Testes
- Simulação de folha
- Validação de relatórios
- Teste de integrações
- Homologação com RH

### Fase 4: Go-Live
- Corte simultâneo
- Acompanhamento intensivo
- Suporte estendido
- Coleta de feedback

## Riscos e Como Mitigar

### Perda de Dados
- Backup triplo
- Validação cruzada
- Rollback planejado

### Impacto Operacional
- Migração em fim de semana
- Equipe de suporte dedicada
- Processo manual contingencial

### Rejeição dos Usuários
- Treinamento intensivo
- Super usuário em cada área
- Suporte pós-migração`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: '4',
        title: "eSocial do Zero: Implementação Passo a Passo para Pequenas Empresas",
        excerpt: "Guia completo para implementar o eSocial na sua empresa, desde o planejamento até a operação plena.",
        author: "Sara Pereira",
        date: "12 de Março, 2024 às 09:20",
        readTime: "15 min",
        category: "eSocial",
        image: "https://files.catbox.moe/fzxq94.jfif",
        published: true,
        content: `# eSocial do Zero: Guia Completo

O eSocial revolucionou a forma como as empresas se comunicam com o governo.

## O que é eSocial

É um sistema de coleta de informações trabalhistas que unifica o envio de dados pelo ambiente nacional.

## Eventos do eSocial

### Eventos de Tabelas
- S-1000: Informações do Empregador
- S-1010: Rubricas
- S-1020: Lotações
- S-1070: Processos Judiciais

### Eventos Não Periódicos
- S-2190: Admissão
- S-2200: Cadastramento Inicial
- S-2299: Desligamento
- S-2300: Trabalhador Sem Vínculo

### Eventos Periódicos
- S-1200: Folha de Pagamento
- S-1202: Rendimentos Tributáveis
- S-1207: Benefícios
- S-1210: Pagamentos

## Implementação Passo a Passo

### Mês 1: Planejamento
- Formar equipe de projeto
- Mapear processos atuais
- Escolher certificadora digital
- Definir sistema gerador

### Mês 2: Preparação
- Cadastrar empresa no eSocial
- Obter certificado digital
- Testar ambiente de produção
- Treinar equipe

### Mês 3: Tabelas
- Enviar S-1000
- Cadastrar rubricas (S-1010)
- Definir lotações (S-1020)
- Configurar processos (S-1070)

### Mês 4: Operação
- Enviar eventos de admissão
- Gerar primeira folha
- Enviar eventos periódicos
- Validar informações

## Desafios Comuns

### Tecnologia
- Sistema não compatível
- Falta de integração
- Lentidão no envio

### Processual
- Equipe não treinada
- Processos desatualizados
- Falta de documentação

### Operacional
- Erros nos eventos
- Retornos do government
- Prazos apertados

## Dicas de Sucesso

- Comece pequeno e evolua gradualmente
- Invista em treinamento da equipe
- Mantenha backup de tudo
- Tenha plano de contingência
- Monitore os prazos rigorosamente`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: '5',
        title: "Gestão de Empregados Domésticos: Guia Prático para Empregadores",
        excerpt: "Tudo que você precisa saber sobre contratação, gestão e obrigações trabalhistas de empregados domésticos.",
        author: "Sara Pereira",
        date: "10 de Março, 2024 às 11:30",
        readTime: "7 min",
        category: "Trabalho Doméstico",
        image: "https://files.catbox.moe/po2wc0.jpg",
        published: true,
        content: `# Gestão de Empregados Domésticos

A Lei Complementar 150/2015 trouxe direitos e obrigações claras para empregadores domésticos.

## Direitos Garantidos

### Salário e Benefícios
- Salário mínimo ou piso da categoria
- 13º salário proporcional
- Férias + 1/3 constitucional
- FGTS 8% (depósito facultativo)
- INSS patronal 20% + 0,8% sobre seguro acidente

### Jornada de Trabalho
- 44 horas semanais
- Limites de horas extras
- Adicional noturno (22h às 5h)
- Descanso semanal remunerado

### Afastamentos
- Licença maternidade
- Auxílio doença
- Acidente de trabalho

## Contratação Passo a Passo

### 1. Documentação Necessária
- CTPS assinada
- Cédula de identidade
- CPF
- Título de eleitor
- Certificado de reservista
- Comprovante de residência

### 2. Cadastros Obrigatórios
- CAGED no primeiro dia útil
- INSS como contribuinte individual
- Opção pelo FGTS (se desejar)

### 3. Contrato de Trabalho
- Função e salário
- Jornada de trabalho
- Local de trabalho
- Data de admissão

## Obrigações Mensais

### Folha de Pagamento
- Cálculo de salário
- Descontos legais
- Benefícios concedidos
- Encargos sociais

### Entregas Governamentais
- eSocial (eventos S-2200, S-1200, S-1202)
- GFIP (se optante pelo FGTS)

## Rescisão Contratual

### Aviso Prévio
- 30 dias (até 1 ano)
- 3 dias por ano (máximo 90 dias)
- Indenizado se não cumprido

### Verbas Rescisórias
- Salário do mês
- Férias proporcionais + 1/3
- 13º proporcional
- FGTS + multa (se optante)
- Aviso prévio indenizado

## Dicas Práticas

- Mantenha toda documentação organizada
- Use sistema de controle de ponto
- Pague sempre em dia
- Guarde comprovantes por 5 anos
- Busque orientação especializada`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: '6',
        title: "Treinamento de Equipe de RH: Como Desenvolver Profissionais de Alto Desempenho",
        excerpt: "Estratégias eficazes para capacitar sua equipe de RH e transformá-la em parceira estratégica do negócio.",
        author: "Sara Pereira",
        date: "8 de Março, 2024 às 15:00",
        readTime: "9 min",
        category: "Treinamento",
        image: "https://files.catbox.moe/oz2edw.jpg",
        published: true,
        content: `# Treinamento de Equipe de RH

Investir no desenvolvimento da equipe de RH é investir no crescimento da empresa.

## Competências Essenciais do RH Moderno

### Hard Skills
- Legislação trabalhista atualizada
- Cálculos trabalhistas e previdenciários
- Sistemas de RH (ERP, eSocial)
- Análise de dados e indicadores
- Recrutamento e seleção

### Soft Skills
- Comunicação assertiva
- Inteligência emocional
- Negociação e mediação
- Liderança e influência
- Pensamento analítico

## Programa de Desenvolvimento

### Módulo 1: Fundamentos
- Visão estratégica do RH
- Cenário atual do mercado
- Tendências e inovações
- Ética e compliance

### Módulo 2: Operacional
- Processos de admissão
- Cálculo de folha
- Benefícios e encargos
- Rescisões contratuais

### Módulo 3: Estratégico
- Planejamento de RH
- Análise de clima organizacional
- Gestão de desempenho
- Sucessão e carreira

### Módulo 4: Tecnologia
- Automação de processos
- Análise de dados
- Sistemas integrados
- Transformação digital

## Metodologias de Treinamento

### Educação Corporativa
- Aulas presenciais
- E-learning
- Workshops práticos
- Estudos de caso

### Aprendizagem na Prática
- Job rotation
- Projetos desafiadores
- Mentoria cruzada
- Comunidades de prática

## Avaliação de Resultados

### Indicadores de Sucesso
- Redução de turnover
- Aumento de produtividade
- Melhoria no clima organizacional
- Cumprimento de metas

### Ferramentas de Avaliação
- Feedback 360 graus
- Avaliação de competências
- ROI do treinamento
- Pesquisa de satisfação

## Plano de Carreira

### Níveis de Desenvolvimento
- Analista Júnior
- Analista Pleno
- Analista Sênior
- Especialista
- Gestor

### Trajetória Sugerida
- 1-2 anos: Domínio operacional
- 2-3 anos: Especialização técnica
- 3-5 anos: Desenvolvimento estratégico
- 5+ anos: Liderança e gestão

## Dicas de Implementação

- Envolva a liderança
- Personalize o treinamento
- Crie cultura de aprendizado
- Celebre as conquistas
- Mantenha o programa contínuo`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: '7',
        title: "Mentoria em DP: Como Acelerar sua Carreira com Acompanhamento Especializado",
        excerpt: "Descubra como a mentoria pode transformar sua carreira em Departamento Pessoal e abrir novas oportunidades profissionais.",
        author: "Sara Pereira",
        date: "5 de Março, 2024 às 13:45",
        readTime: "6 min",
        category: "Carreira",
        image: "https://files.catbox.moe/rmb1iw.jpg",
        published: true,
        content: `# Mentoria em DP: Acelere sua Carreira

A mentoria é uma poderosa ferramenta de desenvolvimento profissional.

## O que é Mentoria em DP

É um relacionamento de desenvolvimento onde um profissional experiente (mentor) orienta outro (mentorado) no crescimento de carreira.

## Benefícios da Mentoria

### Para o Mentorado
- Aceleração do aprendizado
- Evita erros comuns
- Expande networking
- Ganha perspectiva estratégica
- Desenvolve liderança

### Para o Mentor
- Mantém-se atualizado
- Desenvolve liderança
- Expande influência
- Contribui com a profissão
- Identifica novos talentos

## Como Funciona

### Fase 1: Alinhamento
- Definir objetivos
- Estabelecer expectativas
- Combinar frequência
- Definir métricas

### Fase 2: Desenvolvimento
- Sessões de mentoria
- Desafios práticos
- Leitura recomendada
- Projetos aplicados

### Fase 3: Avaliação
- Revisão de progresso
- Ajuste de estratégias
- Celebração de conquistas
- Planejamento futuro

## Tópicos de Mentoria

### Técnico
- Cálculos complexos
- Auditoria trabalhista
- eSocial e obrigações
- Sistemas e tecnologia

### Comportamental
- Liderança de equipe
- Negociação sindical
- Comunicação eficaz
- Gestão de conflitos

### Estratégico
- Planejamento de RH
- Transformação digital
- Análise de dados
- Visão de negócio

## Encontrando o Mentor Ideal

### Características
- Experiência comprovada
- Disponibilidade real
- Habilidade de ensinar
- Ética profissional
- Networking relevante

### Onde Procurar
- Associações profissionais
- Eventos do setor
- LinkedIn
- Grupos de RH
- Indicações

## Programa de Mentoria

### Estrutura Sugerida
- 12 meses de duração
- Encontros quinzenais
- 90 minutos por sessão
- Objetivos trimestrais
- Avaliação mensal

### Ferramentas
- Plano de desenvolvimento
- Diário de aprendizado
- Projetos práticos
- Feedback estruturado

## Sucesso na Mentoria

### Para o Mentorado
- Seja proativo
- Aceite feedback
- Execute o combinado
- Compartilhe dificuldades
- Valorize o tempo

### Para o Mentor
- Ouça ativamente
- Desafie com respeito
- Compartilhe experiências
- Seja autêntico
- Celebre progressos`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: '8',
        title: "Pacotes de BPO: Como Escolher o Plano Ideal para sua Empresa",
        excerpt: "Compare os diferentes pacotes de serviços BPO e descubra qual modelo melhor atende às necessidades da sua empresa.",
        author: "Sara Pereira",
        date: "3 de Março, 2024 às 17:20",
        readTime: "8 min",
        category: "BPO",
        image: "https://files.catbox.moe/hvg4bq.jpg",
        published: true,
        content: `# Pacotes de BPO: Escolha o Ideal

Cada empresa tem necessidades diferentes. Conheça os pacotes e escolha o melhor para você.

## Pleno Controle DP

### Ideal Para
- Empresas de pequeno porte
- Até 50 funcionários
- Operações simples
- Orçamento limitado

### Serviços Incluídos
- Folha de pagamento mensal
- Cálculos de encargos
- Entregas eSocial básicas
- Suporte via email/telefone

### Benefícios
- Custo acessível
- Processos padronizados
- Conformidade garantida
- Suporte dedicado

### Investimento
- A partir de R$ 499/mês
- Taxa por funcionário adicional
- Setup gratuito

## Master DP

### Ideal Para
- Empresas de médio porte
- 51 a 200 funcionários
- Operações complexas
- Necessidade de escalabilidade

### Serviços Incluídos
- Tudo do Pleno Controle DP +
- Relatórios gerenciais
- Gestão de benefícios
- Consultoria básica
- Prioridade no suporte

### Benefícios
- Visão estratégica
- Indicadores de performance
- Otimização de processos
- Suporte prioritário

### Investimento
- A partir de R$ 1.299/mês
- Taxa por funcionário adicional
- Setup personalizado

## DP Estratégico Premium

### Ideal Para
- Empresas de grande porte
- Acima de 200 funcionários
- Operações críticas
- Necessidade de transformação

### Serviços Incluídos
- Tudo do Master DP +
- Gestão completa
- Auditoria preventiva
- Transformação digital
- Gerente de contas dedicado
- Consultoria estratégica

### Benefícios
- Gestão end-to-end
- Visão 360° do RH
- Transformação digital
- Parceria estratégica
- Resultados garantidos

### Investimento
- Sob consulta
- Proposta personalizada
- ROI garantido

## Como Escolher

### Análise de Necessidades
- Número de funcionários
- Complexidade operacional
- Objetivos estratégicos
- Orçamento disponível

### Fatores Decisivos
- Escalabilidade futura
- Nível de suporte necessário
- Integração com sistemas
- Expertise requerida

### ROI Esperado
- Redução de custos
- Otimização de tempo
- Mitigação de riscos
- Crescimento sustentável

## Processo de Contratação

### 1. Diagnóstico Gratuito
- Análise da situação atual
- Identificação de necessidades
- Proposta personalizada

### 2. Implementação
- Planejamento detalhado
- Migração de processos
- Treinamento da equipe

### 3. Operação
- Gestão contínua
- Melhorias constantes
- Relatórios mensais

### 4. Evolução
- Revisão trimestral
- Ajustes necessários
- Escalabilidade garantida

## Dicas Finais

- Comece pequeno e evolua
- Meça os resultados
- Mantenha comunicação clara
- Envolva a liderança
- Planeje o crescimento`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: '9',
        title: "Compliance Trabalhista: Como Evitar Multas e Processos em 2024",
        excerpt: "Guia completo de compliance trabalhista para manter sua empresa 100% regular e evitar problemas fiscais e trabalhistas.",
        author: "Sara Pereira",
        date: "1 de Março, 2024 às 10:00",
        readTime: "11 min",
        category: "Compliance",
        image: "https://files.catbox.moe/cz3d2g.webp",
        published: true,
        content: `# Compliance Trabalhista: Guia 2024

Manter compliance trabalhista é fundamental para sobrevivência e crescimento das empresas.

## O que é Compliance Trabalhista

É o conjunto de práticas e procedimentos para garantir conformidade total com a legislação trabalhista.

## Principais Áreas de Risco

### 1. Contratação
- Contratos irregulares
- Classificação incorreta de vínculo
- Omissão de cláusulas essenciais
- Falta de registro em CTPS

### 2. Remuneração
- Cálculos incorretos
- Pagamento abaixo do piso
- Omissão de adicionais
- Erros em horas extras

### 3. Encargos Sociais
- Recolhimento incorreto
- Atraso nas entregas
- Valores errados
- Omissão de contribuições

### 4. Segurança e Saúde
- Falta de EPIs
- Ambiente inadequado
- Ausência de treinamentos
- Não cumprimento de normas

## Checklist de Compliance

### Mensal
- [ ] Folha de pagamento correta
- [ ] eSocial enviado no prazo
- [ ] FGTS recolhido
- [ ] INSS descontado
- [ ] IRRF calculado

### Trimestral
- [ ] CATs registradas
- [ ] PPP atualizados
- [ ] Exames médicos
- [ ] Treinamentos realizados

### Anual
- [ ] RAIS entregue
- [ ] CAGED atualizado
- [ ] Relatório anual
- [ ] Auditoria interna

## Ferramentas de Gestão

### Digitais
- Sistema de folha confiável
- Software de eSocial
- Controle de ponto digital
- Gestão de documentos

### Manuais
- Checklists atualizados
- Manuais de procedimentos
- Registros organizados
- Backup de documentos

## Processo de Auditoria

### 1. Planejamento
- Definir escopo
- Montar equipe
- Estabelecer cronograma

### 2. Execução
- Coletar documentos
- Entrevistar responsáveis
- Analisar processos
- Identificar não conformidades

### 3. Relatório
- Listar findings
- Quantificar riscos
- Sugerir correções
- Priorizar ações

### 4. Acompanhamento
- Plano de ação
- Prazos definidos
- Responsáveis designados
- Monitoramento constante

## Riscos da Não Conformidade

### Financeiros
- Multas e juros
- Correções monetárias
- Honorários advocatícios
- Indenizações

### Operacionais
- Interrupção de atividades
- Perda de licenças
- Dificuldade de crédito
- Reputação abalada

### Legais
- Processos trabalhistas
- Sanções administrativas
- Responsabilização pessoal
- Crime contra o sistema

## Melhores Práticas

### Estruturação
- Política de compliance clara
- Responsáveis designados
- Processos documentados
- Treinamento constante

### Tecnologia
- Automação de controles
- Alertas automáticos
- Dashboard de indicadores
- Integração de sistemas

### Cultura
- Liderança engajada
- Comunicação transparente
- Reconhecimento de conformidade
- Aprendizado contínuo

## Indicadores de Sucesso

- Zero multas no ano
- 100% entregas no prazo
- Redução de processos
- Satisfação da equipe
- Eficiência operacional`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: '10',
        title: "Transformação Digital no RH: Como Automatizar Processos e Aumentar Eficiência",
        excerpt: "Descubra como a tecnologia pode transformar seu Departamento Pessoal e torná-lo mais estratégico e eficiente.",
        author: "Sara Pereira",
        date: "28 de Fevereiro, 2024 às 14:15",
        readTime: "10 min",
        category: "Tecnologia",
        image: "https://files.catbox.moe/emdhea.jpg",
        published: true,
        content: `# Transformação Digital no RH

A tecnologia está revolucionando a forma como gerenciamos pessoas e processos.

## O que é Transformação Digital

É a integração de tecnologia em todas as áreas do RH para otimizar processos e criar valor estratégico.

## Benefícios da Digitalização

### Operacionais
- Redução de erros manuais
- Agilidade nos processos
- Padronização de procedimentos
- Disponibilidade 24/7

### Estratégicos
- Dados em tempo real
- Previsão de cenários
- Tomada de decisão baseada em dados
- Foco em atividades estratégicas

### Financeiros
- Redução de custos
- Otimização de recursos
- ROI mensurável
- Escalabilidade garantida

## Tecnologias Essenciais

### 1. Cloud Computing
- Acesso remoto seguro
- Redução de infraestrutura
- Atualizações automáticas
- Backup garantido

### 2. Inteligência Artificial
- Análise preditiva
- Chatbots de atendimento
- Seleção automatizada
- Análise de sentimentos

### 3. Automação
- Processos repetitivos
- Fluxos de aprovação
- Notificações automáticas
- Integração de sistemas

### 4. Analytics
- Dashboards interativos
- KPIs em tempo real
- Análise de tendências
- Relatórios customizados

## Passo a Passo da Transformação

### Fase 1: Diagnóstico
- Mapear processos atuais
- Identificar gargalos
- Levantar tecnologias
- Definir objetivos

### Fase 2: Planejamento
- Escolher tecnologias
- Definir cronograma
- Alocar recursos
- Formar equipe

### Fase 3: Implementação
- Instalação de sistemas
- Migração de dados
- Treinamento de equipe
- Testes e validação

### Fase 4: Operação
- Monitoramento constante
- Otimização contínua
- Expansão gradual
- Inovação permanente

## Ferramentas Recomendadas

### Gestão de Pessoas
- ERP de RH integrado
- Sistema de ponto digital
- Plataforma de benefícios
- Portal do colaborador

### Compliance
- Sistema de eSocial
- Gestão de documentos
- Controle de auditorias
- Alertas automáticos

### Análise
- BI e Analytics
- Ferramentas de BI
- Data Warehouse
- Machine Learning

## Desafios e Como Superar

### Resistência à Mudança
- Envolva a equipe desde o início
- Mostre os benefícios
- Ofereça treinamento
- Celebre pequenas vitórias

### Investimento Inicial
- Comece pequeno
- Prove o ROI
- Busque parceiros
- Use modelos SaaS

### Segurança de Dados
- Criptografia de dados
- Controle de acesso
- Backup regular
- Conformidade LGPD

## Métricas de Sucesso

### Eficiência
- Tempo de processamento
- Redução de erros
- Produtividade da equipe
- Satisfação dos usuários

### Estratégicos
- Retenção de talentos
- Tempo de contratação
- Custo por contratação
- Engagement da equipe

### Financeiros
- ROI do projeto
- Redução de custos
- Economia de escala
- Valor agregado

## Tendências Futuras

- HR Tech como estratégia
- Experiência do colaborador
- Trabalho híbrido
- Gamificação
- Realidade aumentada
- Blockchain em RH

## Dicas de Sucesso

- Comece pelo problema maior
- Envolva a liderança
- Invista em pessoas
- Meça tudo
- Seja ágil e flexível
- Pense no longo prazo`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];

    setBlogPosts(educationalBlogs);
  }, []);

  // Ordenar posts por data (mais recentes primeiro)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const featuredPost = sortedPosts[0];
  const otherPosts = sortedPosts.slice(1);

  return (
    <section id="blog" className="w-full bg-white py-24">
      <div className="container mx-auto px-8">
        
        {/* Header */}
        <FadeIn direction="up" className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-6">
            <span className="font-semibold">Blog</span> e Artigos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conteúdo especializado para transformar sua gestão de Departamento Pessoal
          </p>
        </FadeIn>

        {sortedPosts.length > 0 ? (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <FadeIn direction="up" className="mb-16">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 lg:h-full min-h-[400px]">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-contain"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Em Destaque
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                          {featuredPost.category}
                        </span>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-semibold text-slate-900 mb-4 leading-tight">
                        {featuredPost.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-200">
                            <Image
                              src="https://files.catbox.moe/tgim6y.png"
                              alt="Sara Pereira"
                              width={40}
                              height={40}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">{featuredPost.author}</p>
                            <p className="text-sm text-slate-500">{featuredPost.date}</p>
                          </div>
                        </div>
                        
                        <Button variant="ghost" className="text-primary hover:text-primary/80 p-2">
                          <ArrowRight className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Grid Posts */}
            {otherPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {otherPosts.map((post, index) => (
                  <FadeIn key={post.id} direction="up" delay={index * 0.1}>
                    <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1 text-slate-500 text-sm">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200">
                              <Image
                                src="https://files.catbox.moe/tgim6y.png"
                                alt="Sara Pereira"
                                width={32}
                                height={32}
                                className="object-cover"
                              />
                            </div>
                            <span className="text-sm text-slate-500">{post.author}</span>
                          </div>
                          
                          <Button variant="ghost" className="text-primary hover:text-primary/80 p-2">
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </article>
                  </FadeIn>
                ))}
              </div>
            )}

            {/* CTA */}
            <FadeIn direction="up" className="text-center">
              <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-8 py-4">
                Ver Todos os Artigos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </FadeIn>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-slate-500">Nenhum artigo publicado ainda. Volte em breve!</p>
          </div>
        )}
      </div>
    </section>
  );
}

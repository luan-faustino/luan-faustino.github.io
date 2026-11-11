// Portuguese strings; English is the HTML default.
const PT = {
  nav_about: "Sobre", nav_work: "Projetos", nav_exp: "Experiência", nav_skills: "Competências",
  kicker: "// operações de segurança · automação",
  lead: "Analista de Cibersegurança com foco em Microsoft Defender XDR e em automações em Python que tornam a operação de segurança mais rápida, consistente e auditável.",
  loc: "Blumenau, Brasil · UTC-3", remote: "Aberto a trabalho remoto",
  about_h: "Sobre",
  about_p1: "Atuo em Operações de Segurança (SecOps) na Cooperativa Central Ailos, uma cooperativa financeira brasileira. Meu dia a dia combina a administração da proteção de endpoints com o desenvolvimento do código que integra as ferramentas de segurança.",
  about_p2: "Comecei em tecnologia em 2022 e passei por desenvolvimento, suporte e infraestrutura antes da transição para Segurança da Informação, em 2024. Essa trajetória me dá uma visão de ponta a ponta do ambiente, de servidores e redes até detecção e resposta a incidentes.",
  about_p3: "Trato minhas automações com o mesmo rigor de segurança que exijo dos sistemas que protejo: menor privilégio, credenciais em cofre, trilha de auditoria e aprovação humana para qualquer mudança.",
  work_h: "Trabalhos em destaque",
  w1_h: "Integrações com ferramentas de segurança",
  w1_p: "Mais de 15 integrações com APIs de ferramentas de segurança e TI, para responder perguntas que cruzam ferramentas a partir de um único ponto. Somente leitura, credenciais em cofre e registro de cada consulta.",
  w1_i: "Um ponto único para investigações",
  w2_h: "Fluxo de vulnerabilidades críticas",
  w2_p: "Automação que agrupa vulnerabilidades críticas pela correção, elimina duplicidades, identifica o time responsável e abre as demandas com máquinas afetadas e recomendação, acompanhando até a conclusão.",
  w2_i: "De dias em planilha para minutos",
  w3_h: "Indicadores de segurança automatizados",
  w3_p: "Indicadores mensais coletados direto das ferramentas, com relatórios em Power BI gerados por código e uma definição única por métrica. Só dados agregados chegam à gestão.",
  w3_i: "O mesmo cálculo todo mês",
  w4_h: "Renovação de certificados sem indisponibilidade",
  w4_p: "Inventário consolidado de certificados e prova de conceito de renovação automática em servidores web sem indisponibilidade, validada sob carga.",
  w4_i: "Sem queda durante a renovação",
  w5_h: "Sem admin local, mesmo resultado",
  w5_p: "Script de implantação que instala um sistema de terceiros sem dar privilégio de administrador ao usuário, reduzindo a superfície de ataque nas estações.",
  w5_i: "Menor privilégio nos endpoints",
  w6_h: "Detecção e resposta com SIEM",
  w6_p: "Monitoramento no Wazuh, regras de detecção e correlação, operação de FortiGate e WAF e automações em n8n que reduziram trabalho manual na operação.",
  w6_i: "Triagem mais rápida, menos passos manuais",
  work_note: "Trabalhos feitos para empregadores são descritos sem dados internos. Projetos de laboratório estão sendo publicados no GitHub.",
  exp_h: "Experiência",
  e1_d: "mar 2026 — atual",
  e1_p: "Administração do Microsoft Defender XDR, triagem de alertas EDR/XDR, ciclo de vida de certificados e automação de segurança em Python.",
  e2_d: "set 2025 — fev 2026", e2_t: "Analista de Segurança da Informação JR · Altenburg",
  e2_p: "SIEM Wazuh, FortiGate, gestão de vulnerabilidades e hardening (NIST, ISO/IEC 27001), automação com n8n.",
  e3_d: "mar 2024 — ago 2025", e3_t: "Assistente de Segurança da Informação · Altenburg",
  e3_p: "Monitoramento em SIEM, gestão de WAF, análise com base no OWASP Top 10 e controle de acessos.",
  e4_d: "jan 2023 — mar 2024", e4_t: "Assistente de Infraestrutura · Datainfo, Altenburg",
  e4_p: "Windows Server, Linux, Active Directory, Microsoft 365, Hyper-V, VMware, Docker, SQL Server/Oracle, AWS e implantação de TI em novas lojas.",
  e5_d: "jun 2022 — jan 2023", e5_t: "Auxiliar de Desenvolvimento · Datainfo",
  e5_p: "Desenvolvimento, testes e documentação de aplicações internas.",
  skills_h: "Competências",
  s1: "Operações de segurança", s2: "Automação", s3: "Redes e infraestrutura", s4: "Estudando agora",
  edu_h: "Formação e idiomas",
  edu_p: "CST em Defesa Cibernética — Estácio (em andamento, desde 2025). Português (nativo), inglês (básico, em evolução)."
};

(function () {
  const nodes = document.querySelectorAll("[data-i18n]");
  const EN = {};
  nodes.forEach(n => { EN[n.dataset.i18n] = n.textContent; });
  const btn = document.getElementById("lang");
  function apply(lang) {
    const dict = lang === "pt" ? PT : EN;
    nodes.forEach(n => { const v = dict[n.dataset.i18n]; if (v) n.textContent = v; });
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    btn.textContent = lang === "pt" ? "EN" : "PT";
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }
  let start = "en";
  try { start = localStorage.getItem("lang") || (navigator.language || "").toLowerCase().startsWith("pt") && "pt" || "en"; } catch (e) {}
  apply(start);
  btn.addEventListener("click", () => apply(document.documentElement.lang === "en" ? "pt" : "en"));
})();

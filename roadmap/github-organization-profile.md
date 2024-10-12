# Sobre perfil de organização no GitHub

Para personalizar a página da organização, além do arquivo `README.md` dentro do repositório `.github/profile`, você pode configurar algumas outras opções nesse repositório para personalizar o perfil e definir parâmetros para o GitHub, como:

### 1. **Configuração do Avatar e Descrição da Organização**
Essas configurações não são feitas diretamente no repositório `.github`, mas sim nas **configurações da organização** no GitHub. Para ajustar:
- **Avatar**: Você pode configurar o logotipo da sua organização na aba *Settings* (Configurações) do seu perfil de organização. Vá para **Settings > Profile** e faça o upload da imagem do avatar.
- **Descrição**: Também nas configurações da organização, você pode editar a descrição curta, que será exibida ao lado do avatar da organização.

### 2. **Code of Conduct (Código de Conduta)**
Você pode adicionar um código de conduta padrão para todos os repositórios da organização:
- No repositório `.github`, crie um arquivo no caminho `.github/CODE_OF_CONDUCT.md`.
- Isso definirá um código de conduta padrão que será aplicado a todos os repositórios da organização.

### 3. **Contributing Guidelines (Diretrizes de Contribuição)**
Você pode adicionar diretrizes de contribuição que se aplicam a todos os repositórios da organização:
- No repositório `.github`, crie um arquivo no caminho `.github/CONTRIBUTING.md`.
- Esse arquivo será sugerido automaticamente para colaboradores de todos os repositórios da organização.

### 4. **Templates de Issues e Pull Requests**
Para fornecer templates padrão para issues e pull requests em todos os repositórios da organização:
- No repositório `.github`, crie um diretório `.github/ISSUE_TEMPLATE` e adicione arquivos de templates de issues (por exemplo, `bug_report.md`, `feature_request.md`).
- Crie um arquivo `.github/PULL_REQUEST_TEMPLATE.md` para adicionar um template de pull request.
Esses templates serão aplicados globalmente a todos os repositórios que não tenham templates próprios.

### 5. **Security Policy (Política de Segurança)**
Se o seu projeto precisar de uma política de segurança, você pode criar um arquivo padrão:
- No repositório `.github`, crie o arquivo `.github/SECURITY.md`.
- Esse arquivo será visível em todos os repositórios da organização como uma política de segurança sugerida.

### 6. **Funding (Patrocínio)**
Você pode configurar um arquivo para mostrar como as pessoas podem apoiar financeiramente o seu projeto:
- No repositório `.github`, crie o arquivo `.github/FUNDING.yml`.
- Nele, você pode adicionar links para plataformas de financiamento como GitHub Sponsors, Patreon, OpenCollective, etc.

### 7. **GitHub Actions Workflows Padrão**
Se você quiser definir **ações padrão** para serem reutilizadas por todos os repositórios da organização, pode adicionar workflows do GitHub Actions:
- No repositório `.github`, crie uma pasta `.github/workflows` e adicione arquivos `.yml` para definir workflows de automação, como builds, deploys, ou verificações de código.

### Exemplo de Estrutura do Repositório `.github`:
```
.github/
│
├── profile/
│   └── README.md       # Arquivo README para o perfil da organização
│
├── CODE_OF_CONDUCT.md  # Código de Conduta padrão
├── CONTRIBUTING.md     # Diretrizes de contribuição
├── SECURITY.md         # Política de segurança
├── FUNDING.yml         # Informações de patrocínio
├── ISSUE_TEMPLATE/
│   ├── bug_report.md   # Template para relatar bugs
│   └── feature_request.md # Template para solicitações de recursos
└── workflows/
    └── ci.yml          # Workflow padrão do GitHub Actions
```

### Conclusão:
Além de personalizar o perfil com o `README.md`, você pode usar o repositório `.github` para definir padrões que se aplicam a todos os repositórios da organização. Isso inclui templates, políticas, guidelines e até workflows de automação com GitHub Actions.

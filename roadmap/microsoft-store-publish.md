# Publicando o aplicativo na Microsoft Store

Para converter um PWA em um aplicativo para sistemas Windows e publicá-lo na Microsoft Store de forma relativamente simples, utilizam-se ferramentas que facilitam esse processo, como o **PWABuilder**, oferecido pela Microsoft.

Aqui estão as etapas para converter seu PWA e publicá-lo na Microsoft Store:

### 1. **Converter seu PWA em um aplicativo Windows usando PWABuilder**

O [PWABuilder](https://www.pwabuilder.com/) é uma ferramenta gratuita da Microsoft que ajuda a empacotar seu PWA como um aplicativo para várias plataformas, incluindo Windows. Ele gera os pacotes necessários para enviar à Microsoft Store.

#### Passos para usar o PWABuilder:

1. **Acesse o PWABuilder**: Vá para o site do PWABuilder (https://www.pwabuilder.com/).
2. **Insira o URL do seu PWA**: Digite o URL do seu PWA hospedado, como `https://app.mathjslab.com/`.
3. **Análise e sugestões de melhorias**: O PWABuilder fará uma análise do seu PWA e fornecerá sugestões para atender aos requisitos da Microsoft Store. Ajuste o que for necessário, como adicionar um arquivo `manifest.json` adequado ou configurar corretamente o `service worker`.
4. **Gerar pacotes**: O PWABuilder irá gerar os pacotes de instalação para várias plataformas, incluindo o formato `.msix` para Windows.

### 2. **Testar o aplicativo no Windows**

- Antes de enviar para a Microsoft Store, baixe o pacote `.msix` gerado pelo PWABuilder.
- Instale o pacote no seu computador Windows para testar se o aplicativo funciona corretamente.

### 3. **Criar uma conta de desenvolvedor na Microsoft Partner Center**

- Acesse o [Microsoft Partner Center](https://partner.microsoft.com/) e registre-se como desenvolvedor.
- Pague a taxa única de registro, que é de US$ 19 para uma conta individual ou US$ 99 para uma conta empresarial.
- Complete o processo de verificação da sua conta.

### 4. **Enviar o aplicativo para a Microsoft Store**

Agora que você tem o pacote `.msix` pronto e a conta de desenvolvedor configurada, siga os passos para publicar:

1. **Acesse o Microsoft Partner Center** e vá até a seção **Dashboard**.
2. **Crie um novo aplicativo**: Selecione a opção para criar um novo aplicativo e insira o nome do aplicativo. Esse nome precisa ser único na loja.
3. **Submeter o pacote**: No painel de gerenciamento do aplicativo, vá até a seção de **Submissões** e faça o upload do pacote `.msix` gerado pelo PWABuilder.
4. **Preencher os detalhes do aplicativo**:
    - **Descrição**: Forneça uma descrição do aplicativo, incluindo os recursos principais.
    - **Categoria**: Escolha a categoria adequada para seu aplicativo.
    - **Ícone e imagens promocionais**: Envie os ícones e capturas de tela necessários.
5. **Definir preços e distribuição**: Escolha se o aplicativo será gratuito ou pago e para quais regiões será disponibilizado.
6. **Enviar para revisão**: Após preencher todos os detalhes, envie o aplicativo para revisão.

### 5. **Aprovação e publicação**

- A equipe da Microsoft revisará seu aplicativo, o que pode levar alguns dias.
- Após a aprovação, seu PWA estará disponível como um aplicativo na Microsoft Store, pronto para ser baixado pelos usuários.

### Considerações adicionais:

- Se o seu PWA já está bem configurado (com manifest.json, service worker, etc.), o processo de conversão e publicação será mais rápido.
- A Microsoft também oferece suporte para **notificações push** e **suporte offline** no Windows, o que pode melhorar a experiência do seu PWA quando convertido em aplicativo nativo.

Com esses passos, você pode facilmente transformar seu PWA em um aplicativo para Windows e publicá-lo na Microsoft Store!

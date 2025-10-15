# Publicando o aplicativo no Google Play

O ChatGPT foi questionado:

Eu tenho uma aplicação web progressiva (PWA), hospedada em um endereço:

app.mathjslab.com

Eu também tenho um usuário do Google associado a este aplicativo:

mathjslab@gmail.com

O aplicativo web está hospedado na Netlify, onde é publicado automaticamente
num repositório do GitHub.

A aplicação foi desenvolvida no ambiente do Node.js em TypeScript, sendo
compilada com o Webpack. Eu usei o Capacitor e o Android Studio para gerar um
arquivo apk para dispositivos android. Como eu faço para publicar me aplicativo
no store Google Play?

### Resposta

Para publicar seu aplicativo na Google Play Store, siga estas etapas
detalhadas, considerando que você já gerou o arquivo APK usando Capacitor e
Android Studio.

### 1. **Criar uma conta de desenvolvedor no Google Play Console**

- Acesse o [Google Play Console](https://play.google.com/console) e faça login
  com sua conta de desenvolvedor (`mathjslab@gmail.com`).
- Pague a taxa de registro único (atualmente, é de US$ 25).
- Preencha as informações necessárias, como nome e detalhes de contato.

### 2. **Configurar seu projeto no Android Studio para publicação**

Certifique-se de que o APK que você gerou está assinado corretamente e pronto
para ser enviado à Play Store.

#### 2.1. **Gerar uma chave de assinatura**

Se você ainda não tem uma chave de assinatura, gere uma seguindo os passos
abaixo:

- No Android Studio, vá para `Build > Generate Signed Bundle / APK`.
- Escolha `APK` e clique em `Next`.
- Selecione `Create new` para gerar uma nova chave de assinatura, ou selecione
  uma chave existente, se já tiver.
- Preencha os detalhes da chave e armazene-a em um local seguro. Esta chave
  será usada para assinar todas as atualizações do seu aplicativo.
- Selecione `Release` como a variante de build.
- Após concluir o processo, o Android Studio gerará um APK assinado pronto para
  publicação.

#### 2.2. **Configurando o `build.gradle`**

Verifique se o arquivo `build.gradle` do seu projeto contém as configurações
corretas para o lançamento, incluindo:

- **Version Code** e **Version Name** para acompanhar as versões do aplicativo.
- Certifique-se de que a variante `release` está sendo gerada corretamente.

```groovy
android {
    compileSdkVersion 33
    defaultConfig {
        applicationId "com.mathjslab.app"
        minSdkVersion 21
        targetSdkVersion 33
        versionCode 1
        versionName "1.0"
    }
    signingConfigs {
        release {
            storeFile file("path/to/your/keystore")
            storePassword "your-store-password"
            keyAlias "your-key-alias"
            keyPassword "your-key-password"
        }
    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
            signingConfig signingConfigs.release
        }
    }
}
```

### 3. **Preparar a ficha do aplicativo na Google Play Console**

- Acesse o Google Play Console e clique em **"Criar aplicativo"**.
- Preencha os campos obrigatórios, como nome do aplicativo, idioma padrão e
  categoria.
- Forneça uma descrição curta e longa do aplicativo.

### 4. **Configurar os detalhes do aplicativo**

- **Ícone e capturas de tela**: Prepare ícones em diferentes tamanhos (512x512
  px para o ícone principal) e pelo menos 2 capturas de tela do aplicativo em
  funcionamento.
- **Detalhes de contato**: Insira um e-mail de suporte, como
  `mathjslab@gmail.com`.
- **Política de privacidade**: Se o seu aplicativo coleta dados do usuário,
  você precisará de uma política de privacidade, que deve ser hospedada online
  (ex.: uma página no seu site).

### 5. **Enviar o APK para a Google Play Store**

- Acesse o Google Play Console e vá para a seção **"Versões"**.
- Clique em **"Criar nova versão"** e faça o upload do APK assinado.
- Preencha as notas da versão com informações sobre o que foi alterado ou
  atualizado.
- Escolha a faixa de distribuição (por exemplo, faixa de produção).

### 6. **Completar a checklist de pré-lançamento**

- **Classificação de conteúdo**: Responda ao questionário para classificar o
  conteúdo do seu aplicativo.
- **Definir preços e distribuição**: Escolha os países onde o aplicativo estará
  disponível e se será gratuito ou pago.
- **Verificação de conformidade**: Atenda aos requisitos de conformidade com as
  políticas do Google Play, como o suporte a políticas de privacidade,
  publicidade e coleta de dados.

### 7. **Submeter para revisão**

Após preencher todas as informações e subir o APK, clique em **"Enviar para
revisão"**. O Google fará uma análise do seu aplicativo, o que pode levar
algumas horas a alguns dias.

### 8. **Acompanhar a aprovação**

- Você será notificado sobre o status da publicação do aplicativo no Google
  Play Console. Se houver problemas, o Google fornecerá feedback sobre o que
  precisa ser corrigido.
- Uma vez aprovado, seu aplicativo estará disponível na Google Play Store para
  download.

Se precisar de ajuda em qualquer uma dessas etapas ou ajustes no processo de
compilação com o Capacitor, posso te auxiliar!

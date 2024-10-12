# Informações sobre os arquivos `robots.txt` e `sitemap.xml`

Além dos campos e tags mais comuns que mencionamos, como `<url>`, `<loc>`, `<lastmod>`, `<changefreq>`, e `<priority>`, o arquivo `sitemap.xml` pode conter outros elementos úteis em casos específicos. Abaixo estão os principais campos e tags que você pode utilizar em um `sitemap.xml`, dependendo da sua necessidade.

### Campos/TAGs mais comuns:

1. **`<urlset>`**:
   - Esse é o contêiner que envolve todas as URLs do seu sitemap.
   - Atributo `xmlns` define o namespace e é obrigatório no sitemap padrão.
   ```xml
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   ```

2. **`<url>`**:
   - Cada página ou URL a ser indexada fica dentro dessa tag.
   ```xml
   <url>
       <loc>https://www.mathjslab.com/</loc>
       <lastmod>2024-10-10</lastmod>
       <changefreq>monthly</changefreq>
       <priority>1.0</priority>
   </url>
   ```

3. **`<loc>`**:
   - Especifica o endereço URL completo da página.
   ```xml
   <loc>https://www.mathjslab.com/</loc>
   ```

4. **`<lastmod>`**:
   - Indica a última vez que o conteúdo da URL foi modificado. Geralmente é usado em conjunto com datas no formato `YYYY-MM-DD`.
   ```xml
   <lastmod>2024-10-10</lastmod>
   ```

5. **`<changefreq>`**:
   - Opcional. Indica a frequência esperada de mudanças no conteúdo da página. Pode ser `always`, `hourly`, `daily`, `weekly`, `monthly`, `yearly`, ou `never`.
   ```xml
   <changefreq>monthly</changefreq>
   ```

6. **`<priority>`**:
   - Opcional. Define a prioridade de indexação dessa URL em relação a outras no site. Valores podem variar de `0.0` a `1.0`, sendo que `1.0` indica maior prioridade.
   ```xml
   <priority>1.0</priority>
   ```

### Tags adicionais em um `sitemap.xml`:

1. **`<sitemapindex>`**:
   - Utilizada para criar um índice de sitemaps, ou seja, um arquivo que referencia vários arquivos sitemap. Isso é útil quando você tem um site grande com muitos sitemaps.
   - Cada arquivo sitemap seria listado dentro de uma tag `<sitemap>`, com suas respectivas tags `<loc>` e `<lastmod>`.
   ```xml
   <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <sitemap>
           <loc>https://www.mathjslab.com/sitemap-articles.xml</loc>
           <lastmod>2024-10-10</lastmod>
       </sitemap>
       <sitemap>
           <loc>https://www.mathjslab.com/sitemap-videos.xml</loc>
           <lastmod>2024-10-09</lastmod>
       </sitemap>
   </sitemapindex>
   ```

2. **`<image:image>`** (para sitemaps de imagens):
   - Permite que você adicione URLs de imagens associadas a uma página. Essas tags são adicionadas dentro de cada `<url>`.
   ```xml
   <url>
       <loc>https://www.mathjslab.com/page1.html</loc>
       <image:image>
           <image:loc>https://www.mathjslab.com/image1.jpg</image:loc>
           <image:title>Descrição da imagem</image:title>
       </image:image>
   </url>
   ```

3. **`<video:video>`** (para sitemaps de vídeos):
   - Similar ao `<image:image>`, mas para vídeos.
   ```xml
   <url>
       <loc>https://www.mathjslab.com/video-page.html</loc>
       <video:video>
           <video:content_loc>https://www.mathjslab.com/video.mp4</video:content_loc>
           <video:title>Título do vídeo</video:title>
           <video:description>Descrição do vídeo</video:description>
           <video:thumbnail_loc>https://www.mathjslab.com/thumbnail.jpg</video:thumbnail_loc>
           <video:duration>600</video:duration> <!-- Duração em segundos -->
       </video:video>
   </url>
   ```

4. **`<news:news>`** (para sitemaps de notícias):
   - Usado para adicionar URLs relacionadas a notícias. Inclui campos como título, data de publicação e nome da publicação.
   ```xml
   <url>
       <loc>https://www.mathjslab.com/news/latest-news.html</loc>
       <news:news>
           <news:publication>
               <news:name>MathJSLab News</news:name>
               <news:language>en</news:language>
           </news:publication>
           <news:publication_date>2024-10-10</news:publication_date>
           <news:title>Últimas notícias do MathJSLab</news:title>
       </news:news>
   </url>
   ```

### Recapitulando:
- **Obrigatórios**: `<urlset>`, `<url>`, `<loc>`.
- **Opcionais, mas comuns**: `<lastmod>`, `<changefreq>`, `<priority>`.
- **Específicos de casos**: `<sitemapindex>`, `<image:image>`, `<video:video>`, `<news:news>`.

### Conclusão:
Esses campos adicionais podem ser muito úteis dependendo do tipo de conteúdo que você deseja indexar. No entanto, os campos básicos como `<loc>`, `<lastmod>`, `<changefreq>`, e `<priority>` já cobrem a maioria dos casos.

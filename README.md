# Портфолио Артёма Дегтярева

Одностраничный сайт-портфолио на React, TypeScript, Vite и Tailwind CSS. Внутри есть якорная навигация, активное состояние меню, мобильное меню, табы навыков, фильтры документов, модальные окна и кнопки контактов.

## Запуск

```bash
npm install
npm run dev
```

Если используете pnpm:

```bash
pnpm install
pnpm dev
```

Сборка для публикации:

```bash
npm run build
npm run preview
```

## Публикация сайта

Проект готов к деплою на Vercel, Netlify или GitHub Pages. Настройки уже добавлены:

- Vercel: `vercel.json`
- Netlify: `netlify.toml`
- GitHub Pages: `.github/workflows/deploy-pages.yml`
- Build command: `pnpm run build`
- Publish/output directory: `dist`

После публикации хостинг выдаст публичную ссылку, которую можно отправлять работодателям, клиентам или партнёрам.

### GitHub Pages

1. Создайте пустой репозиторий на GitHub, например `artem-degtyarev-portfolio`.
2. Отправьте проект в репозиторий:

```bash
git remote add origin https://github.com/<username>/artem-degtyarev-portfolio.git
git add .
git commit -m "Initial portfolio website"
git push -u origin main
```

3. В репозитории откройте `Settings` -> `Pages`.
4. В блоке `Build and deployment` выберите `Source: GitHub Actions`.
5. После выполнения workflow сайт будет доступен по адресу:

```text
https://<username>.github.io/artem-degtyarev-portfolio/
```

## Где менять данные

- Основной текст, контакты, навыки, проект и список файлов: `src/data/siteContent.ts`
- Фото профиля: `public/profile-photo.png`
- Файлы для карточек документов: `public/files/project/`
- Резюме: `public/files/resume/`
- Сертификаты: `public/files/certificates/`
- Превью для будущих файлов: `public/previews/`

Чтобы добавить новый документ, положите файл в `public/files/` или `public/files/project/`, при необходимости добавьте превью в `public/previews/`, затем обновите объект в массиве `portfolioFiles` в `src/data/siteContent.ts`.

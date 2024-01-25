import { rest } from 'msw';
import { CategoryData , FeaturedArticlesData, TopArticleData } from './data';

export const handlers = [
  // インターセプトしたいAPIを記述します
  rest.get('/sample', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        text: 'sample text',
      }),
    );
  }),

  rest.get('/top/article-info', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(TopArticleData));
  }),

  rest.get('/articles/:key', (req, res, ctx) => {
    const { key } = req.params;
    console.log(key);
    return res(ctx.status(200), ctx.json(FeaturedArticlesData));
  }),

  rest.get('/categories', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(CategoryData));
  }),
];

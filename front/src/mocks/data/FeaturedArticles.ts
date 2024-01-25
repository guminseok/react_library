export const FeaturedArticlesData = [...Array(10)].map((_, index) => {
  return {
    id: index,
    url: '/',
    imageTagText: '注目の投資',
    imagePath: '/images/dummy01.png',
    title: '新NISAの登場で一般NISAからのロールオーバーが可能に！',
    date: '2022/9/8',
    tagList: ['#NISA', '#暗号資産'],
  };
});

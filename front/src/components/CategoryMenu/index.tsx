import { styled } from 'linaria/react';
import { css } from 'linaria';
import Link from 'next/link';
import { Accordion } from '../Accordion';
import { AccordionItem } from '../Accordion/AccordionItem';

const CategoryMenuStyle = styled.header`
  position: fixed;
  background: #dcd081;
  top: 75px;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const CategoryUlStyle = styled.ul`
  display: flex;
  list-style: none;
`;

const CategoryLiStyle = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  &:hover {
    background: #ffffff;
  }
`;

const CategoryActive = (text: string) =>
  text === 'トップ'
    ? css`
        background: #ffffff;
      `
    : undefined;

const LinkStyle = css`
  text-decoration-line: none;
  display: flex;
  justify-content: center;
`;

const CategoryList = [
  {
    text: 'トップ',
    url: '#',
    tagList: [],
  },
  {
    text: 'ランキング',
    url: '#',
    tagList: [],
  },
  {
    text: '注目の投資',
    url: '#',
    tagList: [
      { url: '#', tagName: '事業型ファンド' },
      { url: '#', tagName: '不動産クラウドファンディング' },
      { url: '#', tagName: 'ソーシャルレンディング' },
    ],
  },
  {
    text: '投資の基本',
    url: '#',
    tagList: [
      { url: '#', tagName: '株式投資' },
      { url: '#', tagName: '投資信託' },
      { url: '#', tagName: '不動産投資' },
      { url: '#', tagName: 'FX' },
      { url: '#', tagName: '初心者向け' },
    ],
  },
  {
    text: 'ブロックチェーン',
    url: '#',
    tagList: [
      { url: '#', tagName: 'ブロックチェーン' },
      { url: '#', tagName: '仮想通貨' },
      { url: '#', tagName: 'NFT' },
      { url: '#', tagName: 'セキュリティトークン' },
      { url: '#', tagName: 'スマートコントラクト' },
      { url: '#', tagName: 'Web3' },
      { url: '#', tagName: 'メタバース' },
    ],
  },
];

export const CategoryMenu = () => {
  return (
    <CategoryMenuStyle>
      <nav>
        <CategoryUlStyle>
          {CategoryList.map((data, index) => {
            return (
              <CategoryLiStyle
                key={`category-${index}`}
                className={CategoryActive(data.text)}
              >
                <Link href={data.url} className={LinkStyle}>
                  <Accordion menuText={data.text}>
                    <ul>
                      {data.tagList.map((item, index) => {
                        return (
                          <AccordionItem
                            key={`tag-${index}`}
                            url={item.url}
                            tagName={item.tagName}
                          />
                        );
                      })}
                    </ul>
                  </Accordion>
                </Link>
              </CategoryLiStyle>
            );
          })}
        </CategoryUlStyle>
      </nav>
    </CategoryMenuStyle>
  );
};

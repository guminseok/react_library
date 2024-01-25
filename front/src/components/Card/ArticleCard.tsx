import { css } from 'linaria';
import { styled } from 'linaria/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const ArticleCardStyle = styled.div`
  position: relative;
  cursor: pointer;
  width: 376px;
  height: auto;
  background-color: white;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
`;

const CardLinkStyle = css`
  margin: 30px 15px 0 0;
  text-decoration: none;
`;

const ArticleImageTag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 33px;
  color: #343434;
  line-height: 33px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #f9e87a;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: -32px;
    z-index: 5;
    border-bottom: 33px solid transparent;
    border-left: 33px solid #f9e87a;
  }
`;

const CardText = styled.p`
  padding: 0 8px;
  color: #343434;
  font-size: 16px;
`;

const CardDateWrap = styled.div`
  padding: 6px 10px 8px 0;
  font-size: 12px;
  display: flex;
  justify-content: right;
  background-color: white;
`;
const CardDateNew = styled.span`
  padding-right: 6px;
  color: red;
`;
const CardDate = styled.span`
  color: #bbbbbb;
`;
const HorizontalLine = styled.hr`
  height: 1px;
  border: none;
  border-top: 1px #bbbbbb solid;
  margin: 0 8px;
`;

const CardTagWrap = styled.div`
  display: flex;
  height: 48px;
  padding-left: 4px;
  align-items: center;
`;

const CardTagText = styled.span`
  margin-left: 12px;
  padding: 2px 8px;
  border-radius: 6px;
  color: #095bd6;
  background-color: #e5e5e5;

  &:first-child {
    margin-left: 5px;
  }
`;

type Props = {
  url: string;
  imageTagText: string;
  imagePath: string;
  title: string;
  date: string;
  tagList?: string[];
};

export const ArticleCard: FC<Props> = ({
  url,
  imageTagText,
  imagePath,
  title,
  date,
  tagList,
}) => {
  return (
    <Link href={url} className={CardLinkStyle}>
      <ArticleCardStyle>
        <Image
          src={imagePath}
          alt='article-card-image'
          width={376}
          height={211}
        />
        <ArticleImageTag>{imageTagText}</ArticleImageTag>
        <CardText>{title}</CardText>
        <CardDateWrap>
          <CardDateNew>New</CardDateNew>
          <CardDate>{date}</CardDate>
        </CardDateWrap>
        <HorizontalLine />
        <CardTagWrap>
          {tagList &&
            tagList?.map((tagText, index) => {
              return <CardTagText key={index}>{tagText}</CardTagText>;
            })}
        </CardTagWrap>
      </ArticleCardStyle>
    </Link>
  );
};

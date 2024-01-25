import { css } from 'linaria';
import { styled } from 'linaria/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const LinkStyle = css`
  display: block;
  width: 80%;
  margin: 0 auto;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
`;

const SwiperSlideImage = css`
  width: 100%;
`;

const TitleWrap = styled.div`
  padding: 20px 30px;
  background-color: #fff;
  color: #000;
`;

const TitleText = styled.p`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 200;
  margin: 0;
  height: 80px;

  span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;

const CardTagWrap = styled.p`
  height: 40px;
  margin: 5px 0 0 0;
  padding-top: 10px;
  border-top: 1px solid #bbbbbb;

  span {
    margin-top: 20px;
    margin-right: 10px;
    padding: 5px 10px;
    font-size: 16px;
    color: #095bd6;
    border-radius: 6px;
    background: #e5e5e5;
  }
`;

type Props = {
  url: string;
  imagePath: string;
  title: string;
  tagList: string[];
};

export const SlideCard: FC<Props> = ({ url, imagePath, title, tagList }) => {
  return (
    <Link href={url} className={LinkStyle}>
      <Image
        src={imagePath}
        width={800}
        height={500}
        alt='hero-slide-image'
        className={SwiperSlideImage}
      />
      <TitleWrap>
        <TitleText>
          <span>{title}</span>
        </TitleText>
        <CardTagWrap>
          {tagList &&
            tagList?.map((tagText, index) => {
              return <span key={index}>{tagText}</span>;
            })}
        </CardTagWrap>
      </TitleWrap>
    </Link>
  );
};

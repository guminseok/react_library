import { css } from 'linaria';
import { styled } from 'linaria/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const FeatureCardStyle = styled.div`
  display: flex;
  cursor: pointer;
  width: 1194px;
  height: 352px;
  background-color: #f9e87a;
`;

const CardLinkStyle = css`
  margin: 30px 15px 0 0;
  text-decoration: none;
`;

const FeatureCardTextWrap = styled.div`
  align-items: center;
`;

const CardText = styled.p`
  padding: 0 8px;
  color: #343434;
  font-size: 16px;
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
  padding-left: 4px;
  display: flex;
  height: 48px;
  align-items: center;
`;

const CardTagText = styled.span`
  padding-left: 4px;
  color: #434343;
`;

type Props = {
  url: string;
  imagePath: string;
  title: string;
  date: string;
  tagList?: string[];
};

export const TopFeatureCard: FC<Props> = ({
  url,
  imagePath,
  title,
  date,
  tagList,
}) => {
  return (
    <Link href={url} className={CardLinkStyle}>
      <FeatureCardStyle>
        <Image
          src={imagePath}
          alt='magnifying-glass-icon'
          width={625}
          height={352}
        />
        <FeatureCardTextWrap>
          <CardText>{title}</CardText>
          <CardDate>{date}</CardDate>
          <HorizontalLine />
          <CardTagWrap>
            {tagList &&
              tagList?.map((tagText, index) => {
                return <CardTagText key={index}>{tagText}</CardTagText>;
              })}
          </CardTagWrap>
        </FeatureCardTextWrap>
      </FeatureCardStyle>
    </Link>
  );
};

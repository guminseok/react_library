import { styled } from 'linaria/react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import { FC } from 'react';
import { css } from 'linaria';
import { GetHeroArticleDatas } from '@/src/api/top';
import Link from 'next/link';
import { SlideCard } from '../Card/SlideCard';

SwiperCore.use([Pagination, Navigation, Autoplay]);

const HeroSectionStyle = styled.div`
  padding-top: 32px;
  height: 780px;

  /* 前へ次への矢印カスタマイズ */
  .swiper-button-prev,
  .swiper-button-next {
    height: 30px;
    width: 30px;
  }
  /* 前へ次への矢印カスタマイズ */
  .swiper-button-prev:after,
  .swiper-button-next:after {
    content: '';
    margin: auto;
    height: 30px;
    width: 30px;
    background-repeat: no-repeat;
    background-size: contain;
  }

  /* 前への矢印カスタマイズ */
  .swiper-button-prev:after {
    background-image: url(/images/slider_arrow_left.svg);
  }

  /* 次への矢印カスタマイズ */
  .swiper-button-next:after {
    background-image: url(/images/slider_arrow_right.svg);
  }

  .swiper-pagination-bullets {
    bottom: -15px;
  }
`;

const SwiperSlideVisible = css`
  padding-bottom: 45px;
  .swiper-slide {
    &:not(.swiper-slide-visible) {
      .slide {
        pointer-events: none;
        opacity: 0.3;
      }
    }
  }
`;

const bulletClassStyle = css`
  margin: 10px;
  width: 50px;
  height: 3px;
  display: inline-block;
  background: #bbbbbb;
  opacity: 0.8;
`;

const bulletActiveClassStyle = css`
  background: #dcd081;
`;

type Props = {
  heroArticleDatas: GetHeroArticleDatas;
};

export const TopHeroSection: FC<Props> = ({ heroArticleDatas }) => {
  return (
    <HeroSectionStyle>
      <Swiper
        slidesPerView={1}
        speed={2000}
        loopAdditionalSlides={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        watchSlidesProgress={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
          bulletClass: bulletClassStyle,
          bulletActiveClass: bulletActiveClassStyle,
        }}
        navigation
        loop={true}
      >
        {heroArticleDatas &&
          heroArticleDatas.map((data, index) => {
            return (
              <SwiperSlide key={`${index}`} className={SwiperSlideVisible}>
                <SlideCard
                  url={data.url}
                  imagePath={data.imagePath}
                  title={data.title}
                  tagList={data.tagList}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </HeroSectionStyle>
  );
};

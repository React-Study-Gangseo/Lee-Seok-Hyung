import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % imgList.length;
    setCurrentIndex(nextIndex);
  };
  const goToPrevSlide = () => {
    const prevIndex = (currentIndex - 1 + imgList.length) % imgList.length;
    setCurrentIndex(prevIndex);
  };

  // 5초마다 다음 이미지를 자동으로 보여주기
  useEffect(() => {
    const slideShow = setInterval(goToNextSlide, 5000);
    return () => clearInterval(slideShow);
  }, [currentIndex]);

  const imgList = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1587731556938-38755b4803a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2978&q=80',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1508272849285-ec94ff3855e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1543622748-5ee7237e8565?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1603917745459-0078218e7c5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1680059439144-aefe88d4c858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3024&q=80',
    },
  ];
  return (
    <>
      <CarouselContainerDiv>
        <LeftIconImg
          onClick={goToPrevSlide}
          src="/assets/icon-swiper-1.svg"
          alt="좌측 이동 화살표"
        />
        <div className="img-container">
          {imgList.map((img, index) => (
            <CarouselImg
              key={img.id}
              src={img.url}
              alt="캐러셀 이미지"
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                transition: 'transform ease-out .5s',
              }}
            />
          ))}
        </div>
        <RightIconImg
          onClick={goToNextSlide}
          src="/assets/icon-swiper-2.svg"
          alt="우측 이동 화살표"
        />
      </CarouselContainerDiv>
    </>
  );
};

export default Carousel;

const CarouselContainerDiv = styled.div`
  margin-top: 3px;
  position: relative;
  display: flex;
  height: 500px;
  background: #f2f2f2;

  .img-container {
    position: relative;
    margin: 0 auto;
    width: 70%;
    overflow: hidden;
  }
`;
const CarouselImg = styled.img`
  position: absolute; //추가
  width: 100%;
`;
const LeftIconImg = styled.img`
  position: absolute;
  z-index: 10;
  width: 15%;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  object-fit: contain;
  cursor: pointer;
`;
const RightIconImg = styled.img`
  position: absolute;
  width: 15%;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  object-fit: contain;
  cursor: pointer;
`;

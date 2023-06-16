"use client";

import { FC, useState } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import Title from '../UI/typography/Title'

import product1 from '@/images/gallery1.png'
import product2 from '@/images/gallery2.png'
import product3 from '@/images/gallery3.png'
import product4 from '@/images/gallery4.png'
import product5 from '@/images/gallery5.png'
import Arrow from '../UI/Arrow';
import { useLocale } from 'next-intl';
import { cn } from '@/utils/utils';

const images = [product1, product2, product3, product4, product5, product1, product2, product3, product4, product5, product1, product2, product3, product4, product5]

interface GalleryProps {
}

const Gallery: FC<GalleryProps> = ({ }) => {
  const locale = useLocale();
  const [currentImage, setCurrentImage] = useState<any>(images[0]);
  const changeImageHandler = (index: number) => {
    setCurrentImage(images[index]);
  }

  return <div className='container py-8'>
    <Title variant='default' >
      {locale === 'ar' ? 'المعرض' : 'Gallery'}
    </Title>
    <div className="py-4 sm:py-8 w-4/6 mx-auto">
      <Image
        src={currentImage}
        alt="ECMF"
        width={1920}
        height={1080}
        className='w-full h-auto'
      />

    </div>
    <div className="relative">
      <div className="w-11/12 mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={16}
          navigation={{ prevEl: ".arrow-prev", nextEl: ".arrow-next" }}
          modules={[Pagination, Navigation]}
          pagination={true}
          className="mySwiper w-full mt-8 !pb-16 flex items-center"
        >
          {images.map((item: any, index: number) => {
            return <SwiperSlide key={index} onClick={() => changeImageHandler(index)}>
              <Image
                src={item}
                alt="ECMF"
                width={item.width}
                height={item.height}
                className='w-full h-auto cursor-pointer'
              />
            </SwiperSlide>
          })}
        </Swiper>
      </div>
      <Arrow
        variant='prev'
        className={cn('arrow-prev absolute -bottom-1 z-10',
          locale === 'ar' ? 'right-1/4' : 'left-1/4'
        )}
      >
        Prev
      </Arrow>
      <Arrow
        variant='next'
        className={cn('arrow-next absolute -bottom-1 z-10',
          locale === 'ar' ? 'left-1/4' : 'right-1/4'
        )}
      >next
      </Arrow>
    </div>
  </div>
}

export default Gallery
"use client";

import { FC } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper";


import Title from '../ui/typography/Title'
import ProductCard from '../ProductCard';

import productImage from '@/images/product.png'
interface TopSalesProps {
  sectionTitle : string
  productTitle: string
  productDescription: string
  productPrice: string
  productCurrency: string
}

const TopSales: FC<TopSalesProps> = ({sectionTitle, productTitle, productDescription, productPrice, productCurrency }) => {
  return <section className='py-8'>
    <Title variant="default" className='container' >
      {sectionTitle}
    </Title>
    <Swiper
      scrollbar={{
        draggable: true,
        hide: false,
        dragSize: 75,
      }}
      breakpoints={{
        // when window width is >= 640px
        0: {
          slidesPerView: 2.75,
          spaceBetween: 16,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3.75,
          spaceBetween: 32,
        },
      }}
      // centeredSlides={true}
      // navigation={true}
      modules={[Scrollbar]}
      className="mySwiper mt-8 rtl:mr-[10%] ltr:ml-[10%]"
    >
      {Array.of(1, 2, 3, 4, 5, 6).map((item, index) => {
        return <SwiperSlide key={index}>
          <ProductCard
            title={productTitle}
            description={productDescription}
            image={productImage}
            price={productPrice}
            currency={productCurrency}
          />
        </SwiperSlide>
      })}
    </Swiper>
  </section>
}

export default TopSales
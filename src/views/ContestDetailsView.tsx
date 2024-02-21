'use client';

import Banner from '@/components/common/Banner';
import ContestBody from '@/components/contest-details-one/ContestBody';
import inner_hero_shape from '@/public/images/elements/inner-hero-shape.png';
import Image from 'next/image';

const ContestDetailsView = () => {
  return (
    <>
      {/* Banner section here */}
      <div className='inner-hero-section'>
        <div className='bg-shape'>
          <Image src={inner_hero_shape} alt='inner_hero_shape' />
        </div>
        <Banner
          breadcrumb={[
            ['Home', '/'],
            ['Lottery', '/'],
            ['Contest No: B2T', '/'],
          ]}
        />
      </div>

      {/* Bdy section here */}
      <ContestBody />
    </>
  );
};

export default ContestDetailsView;

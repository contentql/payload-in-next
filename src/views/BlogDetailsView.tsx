'use client';

import { trpc } from '@/trpc/client';

import Image from 'next/image';

import inner_hero_shape_2 from '/public/images/elements/inner-hero-shape-2.png';

import Banner from '@/components/common/Banner';
import Details from '@/components/single-blog/Details';

const BlogDetailsView = () => {

  const { data: blogDetails } = trpc.public.getBlogDetailsById.useQuery({
    id: '65e701cfce4aa870f5168e0d',
  });

  console.log('blog individual details', blogDetails);
  return (
    <>
      {/* Banner section here */}
      <div className='inner-hero-section style--six'>
        <div className='bg-shape'>
          <Image src={inner_hero_shape_2} alt='inner hero shape 2' />
        </div>
        <Banner
          breadcrumb={[
            ['Home', '/'],
            ['Pages', '/'],
            ['Blog', '/'],
            ['Single Blog', '/'],
          ]}
        />
      </div>

      {/* Details section here */}
      <Details blogDetails={blogDetails} />
    </>
  );
};

export default BlogDetailsView;

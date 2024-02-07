import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/bafybeia5wrno4y7u6kp5yw7rqcfwhovtbm7kjnc74irbkenuewrpmmefei/1.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Honey Badger',
  description: 'A honey badger',
  openGraph: {
    title: 'Honey Badger',
    description: 'A honey badger',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/bafybeifoksxtoyd23eshxysus55h66renmnqjkbswq5tnmmygzaeepo3ea`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Honey Badger</h1>
    </>
  );
}
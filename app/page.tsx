import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `https://bafybeifoksxtoyd23eshxysus55h66renmnqjkbswq5tnmmygzaeepo3ea.ipfs.dweb.link/`],
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Honey Badger',
  description: 'A honey badger',
  openGraph: {
    title: 'Honey Badger',
    description: 'A honey badger',
    images: [`https://bafybeifoksxtoyd23eshxysus55h66renmnqjkbswq5tnmmygzaeepo3ea.ipfs.dweb.link/`],
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
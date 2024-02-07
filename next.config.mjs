/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects(){
      return [
        {
          source: '/honeybadger',
          destination: 'https://youtu.be/4r7wHMg5Yjg',
          permanent: false
        }
      ]
    }
  };

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [ "antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table" ],
  output: 'export',
  images: {
    unoptimized: true,
  },
  // images: {
  //   loader: 'custom',
  //   loaderFile: './my-loader.ts',
  // },
  async rewrites() {
    return [
      {
        source: '/:path*', // Match any path that isn't explicitly defined
        destination: '/', // Redirect to the homepage
      },
    ];
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
module.exports = {
	typescript: {
		ignoreBuildErrors: true,
	},
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dpfycjmuw/image/**',
          },
        ],
      },
};

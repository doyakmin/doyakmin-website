/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/walkerholic/namgu-admin',
                destination: 'https://namgu-admin.vercel.app',
                permanent: false,
            },
            {
                source: '/walkerholic/namgu-admin/:path*',
                destination: 'https://namgu-admin.vercel.app/:path*',
                permanent: false,
            },
        ];
    },
};

export default nextConfig;

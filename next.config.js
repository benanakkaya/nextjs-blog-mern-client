/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
      },
      images:{
        remotePatterns:[
          {protocol:"https",hostname:"ares.shiftdelete.net"}
        ]
      },
      env: {
        
      },
}

module.exports = nextConfig

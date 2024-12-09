const { withExpo } = require("@expo/next-adapter");
const withTM = require("next-transpile-modules")([
  "expo-video",
  "@react-native/assets-registry",
  "expo-asset",
  "expo-modules-core",
  "react-native",
  "react-native-web",
  "expo",
]); // Add the package name here

const nextConfig = withTM(
  withExpo({
    // projectRoot: __dirname,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      });
      config.module.rules.push({
        test: /\.d\.ts$/,
        loader: "ignore-loader", // Ignore type definitions
      });
      return config;
    },
  })
);

/** @type {import('next').NextConfig} */
// const nextConfig = withTM(
//   withExpo({
//     reactStrictMode: false,
//     swcMinify: true,
//     transpilePackages: [
//       "react-native",
//       "react-native-web",
//       "expo",
//       // "expo-video",
//       // Add more React Native / Expo packages here...
//     ],
//     experimental: {
//       forceSwcTransforms: true,
//     },
//     // webpack: (config) => {
//     //   // Add a rule to handle TypeScript/Flow types
//     //   config.module.rules.push({
//     //     test: /\.tsx?$/,
//     //     use: [
//     //       {
//     //         loader: "babel-loader",
//     //         options: {
//     //           presets: ["@babel/preset-typescript"],
//     //         },
//     //       },
//     //     ],
//     //     exclude: /node_modules/,
//     //   });

//     //   return config;
//     // },
//   })
// );

module.exports = nextConfig;

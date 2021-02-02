/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: "@snowpack/app-scripts-react",
  packageOptions: {
    rollup: {
      plugins: [require("rollup-plugin-node-polyfills")()],
    },
  },
  mount: {
    // directory name: 'build directory'
    public: "/",
    src: "/dist",
  },
  // plugins: [],
  // plugins: ["@snowpack/plugin-react-refresh"],

  alias: {
    // Type 1: Package Import Alias
    // Type 2: Local Directory Import Alias (relative to cwd)
    // "containers": "./src/containers",
    "react-dat-gui": "./node_modules/react-dat-gui",
    "@app": "./src"
  },
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 8080,
    src: "src",
    bundle: process.env.NODE_ENV === "production",
    routes: "public/index.html",
  },
  buildOptions: {
    /* ... */
  },
};

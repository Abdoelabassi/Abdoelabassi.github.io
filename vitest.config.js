export default {
  resolve: {
    alias: {
      jquery: "jquery/dist/jquery.js",
    },
  },
  optimizeDeps: {
    include: ["jquery"],
  },
};

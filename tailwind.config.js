module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#242882',        // RGB(36,40,130)
        'light-blue': '#C3D7E2',   // RGB(195,215,226)
        'cream': '#E5D9C9'          // RGB(229,217,201)
      },
      fontFamily: {
        sports: ['"Sports"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_900_10: "#181d2e",
        gray_900_11: "#151515",
        light_green_A700: "#6ddb29",
        red_100_01: "#fad0d7",
        black_900_01: "#090c1a",
        black_900_00: "#090d1b00",
        yellow_A400: "#fff100",
        yellow_800: "#f79e1b",
        blue_gray_900_02: "#171f40",
        indigo_800_02: "#1e448d",
        blue_gray_900_01: "#151d3c",
        deep_purple_A200: "#8061ff",
        blue_gray_900: "#1d2546",
        indigo_800_01: "#1e3c9d",
        black_900_03: "#000000",
        black_900_02: "#0d0e12",
        deep_orange_100: "#ffc1c1",
        blue_900: "#1a46b7",
        blue_gray_100: "#ceced0",
        amber_500: "#facc14",
        light_blue_600_01: "#009cde",
        blue_gray_500: "#6b7a99",
        black_900_cc_01: "#060913cc",
        black_900_0c: "#0000000c",
        blue_100: "#d3ddf7",
        deep_orange_A200: "#ff6c2c",
        red_700: "#e21836",
        blue_A700: "#2c5dfe",
        blue_gray_500_71: "#6b7a9971",
        light_blue_600: "#00a3df",
        blue_gray_900_3f_01: "#212e393f",
        green_600: "#239f57",
        light_green_900: "#356418",
        blue_gray_500_67: "#6b7a9967",
        black_900_67: "#090d1b67",
        blue_200_26: "#a6caff26",
        yellow_900: "#f7931a",
        yellow_100: "#fdeacd",
        blue_A700_3f: "#2c5dfe3f",
        gray_300_43: "#e3e5e843",
        amber_600_01: "#f9b50b",
        blue_gray_600: "#4d5e80",
        gray_900: "#0b131a",
        teal_50: "#d7e2f3",
        yellow_900_01: "#f28a1a",
        blue_gray_900_3f: "#202d393f",
        white_A700_7f: "#ffffff7f",
        indigo_A100: "#829fff",
        blue_A200: "#3782f2",
        blue_A700_67: "#2c5dfe67",
        green_500: "#3ac942",
        light_blue_900: "#00447c",
        white_A700_99: "#ffffff99",
        yellow_600: "#ffda2b",
        deep_orange_700: "#ee4023",
        gray_900_4c: "#1212124c",
        blue_gray_700: "#525252",
        white_A700_19: "#ffffff19",
        red_A700: "#eb001b",
        gray_600: "#7c7c7c",
        red_A200: "#ff4e4e",
        yellow_100_01: "#fde7cd",
        lime_100: "#fce6ce",
        cyan_800: "#007b84",
        blue_A700_4c: "#2c5dfe4c",
        red_500_02: "#f83838",
        white_A700: "#ffffff",
        indigo_800: "#42347c",
        red_500_01: "#f23737",
        deep_purple_900: "#3a2981",
        red_900: "#b01923",
        red_500: "#fe2b2b",
        red_100: "#fad0d2",
        black_900: "#090d1b",
        blue_A700_7f: "#2c5dfe7f",
        black_900_26: "#00000026",
        gray_900_02: "#0d1326",
        gray_900_03: "#0d1226",
        gray_900_04: "#0e1326",
        gray_600_02: "#6d6e7e",
        gray_600_01: "#696b71",
        gray_900_05: "#231f20",
        amber_600: "#e7b008",
        orange_A700: "#ff5f00",
        gray_900_01: "#101922",
        amber_200: "#ffdf80",
        gray_900_06: "#1a1d23",
        orange_300: "#fdbd44",
        gray_300: "#e3e5e8",
        gray_900_07: "#0f1522",
        deep_purple_A200_b2: "#8061ffb2",
        gray_300_01: "#e7e3e4",
        gray_900_08: "#161d38",
        gray_900_09: "#202125",
        gray_300_7f: "#e3e5e87f",
        black_900_cc: "#000000cc",
        white_A700_01: "#fefefe",
        blue_100_03: "#c1daff",
        blue_100_01: "#cbdeff",
        indigo_900: "#003087",
        blue_100_02: "#ccecfe",
        indigo_500: "#3362ab",
      },
      boxShadow: {
        bs: "0px 0px  40px 0px #2c5dfe7f",
        bs7: "0px 0px  15px 0px #8061ff",
        bs5: "0px 10px  30px 0px #2c5dfe3f",
        bs3: "0px 10px  30px 0px #2c5dfe4c",
        bs2: "0px 0px  40px 0px #8061ffb2",
        bs4: "0px 1px  1px 0px #525252",
        bs6: "0px 1px  1px 0px #1212124c",
        bs8: "0px 4px  12px 0px #0000000c",
        bs1: "0px 5px  70px 0px #00000026",
      },
      fontFamily: {
        inter: "Inter",
        bebasneue: "Bebas Neue",
        halyarddisplay: "Halyard Display",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#090d1b00,#090d1b)",
        gradient1: "linear-gradient(144deg ,#2c5dfe67,#090d1b67)",
        gradient2: "linear-gradient(180deg ,#090d1b,#090d1b00)",
        gradient3: "linear-gradient(40deg ,#0d1226,#2c5dfe)",
        gradient4: "linear-gradient(180deg ,#090d1b00,#2c5dfe)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

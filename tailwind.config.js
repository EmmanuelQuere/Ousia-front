const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ousiaBlue: {
          light: '#BFEBE9',
          DEFAULT: '#305AB0'
        },
        ousiaOrange: {
          light: '#FFA17A',
          DEFAULT: '#FF7424'
        },
        ousiaGreen: {
          light: '#B7E5D1',
          DEFAULT: '#34B658'
        },
        ousiaYellow: {
          light: '#FEF094',
          DEFAULT: '#FFCB49'
        },
        ousiaBack: {
          DEFAULT: '#F4ECCB'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
}

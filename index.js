module.exports = {
  extends: ["react-app"],
  rules: {
    "import/newline-after-import": "error",
    "import/order": [
      "error",
      { groups: [["builtin", "external", "internal"]] },
    ],
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-pascal-case": [
      "error",
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    "react/prefer-stateless-function": [
      "error",
      { ignorePureComponents: true },
    ],
    "react/self-closing-comp": "error",
    "react/destructuring-assignment": ["error", "always"],
    "react/jsx-props-no-spreading": [
      "error",
      {
        html: "enforce",
        custom: "enforce",
        explicitSpread: "ignore",
        exceptions: [],
      },
    ],
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "ignore" }],
  },
};

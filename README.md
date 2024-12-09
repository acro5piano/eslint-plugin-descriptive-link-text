# eslint-plugin-descriptive-link-text

An ESLint plugin that enforces meaningful and descriptive text for all (or optionally specific tags) JSX elements. Generic phrases like "click here" or "learn more" will be descriptive.

This helps improve accessibility and search engine optimization (SEO) by encouraging better practices for link text. In fact, lighthouse reduces the score if these words are included:

https://github.com/GoogleChrome/lighthouse/blob/b64b3534542c9dcaabb33d40b84ed7c93eefbd7d/core/audits/seo/link-text.js#L11-L99

## Installation

Install the plugin via your favorite package manager:

```bash
npm install --save-dev eslint-plugin-descriptive-link-text
# or
yarn add -D eslint-plugin-descriptive-link-text
# or
pnpm add -D eslint-plugin-descriptive-link-text
```

## Usage

Add `descriptive-link-text` to your ESLint configuration:

### Basic Configuration

```javascript
module.exports = {
  plugins: ['descriptive-link-text'],
  rules: {
    'descriptive-link-text/no-undescriptive-text': 'error',
  },
}
```

#### Examples

**Incorrect:**

```jsx
<a>Click here</a>
<button>Learn more</button>
```

**Correct:**

```jsx
<a>View product details</a>
<button>Subscribe to newsletter</button>
```

### Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the plugin.

## License

This project is licensed under the [MIT License](LICENSE).

# eslint-plugin-banned-anchor-text

An ESLint plugin that enforces meaningful and descriptive text for all (or optionally specific tags) JSX elements. Generic phrases like "click here" or "learn more" will be banned.

This helps improve accessibility and search engine optimization (SEO) by encouraging better practices for link text. In fact, lighthouse clearly reduces the score if one of these words are included:

https://github.com/GoogleChrome/lighthouse/blob/b64b3534542c9dcaabb33d40b84ed7c93eefbd7d/core/audits/seo/link-text.js#L11-L99

## Installation

Install the plugin via a package manager:

```bash
npm install eslint-plugin-banned-anchor-text --save-dev
# or
yarn add eslint-plugin-banned-anchor-text --dev
# or
pnpm add eslint-plugin-banned-anchor-text --dev
```

## Usage

Add `banned-anchor-text` to your ESLint configuration:

### Basic Configuration

```javascript
module.exports = {
  plugins: ['banned-anchor-text'],
  rules: {
    'banned-anchor-text/no-banned-text': 'error',
  },
}
```

### Advanced Configuration

You can customize the plugin using the following options:

- **`additionalBannedPhrases`**: Add custom phrases to the banned list.
- **`tagNames`**: Specify which tag names the rule should apply to. Defaults to all.

#### Example

```javascript
module.exports = {
  plugins: ['banned-anchor-text'],
  rules: {
    'banned-anchor-text/no-banned-text': [
      'error',
      {
        additionalBannedPhrases: ['download now', 'this link'],
        tagNames: ['a', 'button'], // Applies only to <a> and <button>
      },
    ],
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

## Development

### Running Tests

Clone the repository and install dependencies:

```bash
pnpm install
```

Run tests:

```bash
pnpm test
```

### Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the plugin.

## License

This project is licensed under the [MIT License](LICENSE).

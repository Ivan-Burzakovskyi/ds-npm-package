# Design System NPM Package

A reusable Design System NPM package containing React components with TypeScript support.

## Installation

```bash
npm install @ivanburzakovskyi/ds-npm-package
```

or

```bash
yarn add @ivanburzakovskyi/ds-npm-package
```

## Components

### Button

A customizable button component with multiple variants and sizes.

#### Props

- `label` (string, required): Button text
- `variant` ('primary' | 'secondary' | 'outline', default: 'primary'): Button style variant
- `size` ('small' | 'medium' | 'large', default: 'medium'): Button size
- `disabled` (boolean, default: false): Disabled state
- `onClick` (function): Click handler
- `className` (string): Additional CSS classes

#### Usage

```tsx
import { Button } from '@ivanburzakovskyi/ds-npm-package';

function App() {
  return (
    <>
      <Button label="Primary Button" variant="primary" />
      <Button label="Secondary Button" variant="secondary" />
      <Button label="Outline Button" variant="outline" />
      <Button label="Small Button" size="small" />
      <Button label="Large Button" size="large" />
      <Button label="Disabled Button" disabled />
    </>
  );
}
```

### Input

A customizable input component with label, helper text, and error states.

#### Props

- `label` (string): Input label
- `type` ('text' | 'email' | 'password' | 'number' | 'tel', default: 'text'): Input type
- `placeholder` (string): Placeholder text
- `value` (string): Input value
- `size` ('small' | 'medium' | 'large', default: 'medium'): Input size
- `disabled` (boolean, default: false): Disabled state
- `error` (boolean, default: false): Error state
- `helperText` (string): Helper or error message
- `onChange` (function): Change handler
- `className` (string): Additional CSS classes

#### Usage

```tsx
import { Input } from '@ivanburzakovskyi/ds-npm-package';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  return (
    <>
      <Input
        label="Username"
        placeholder="Enter your username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        helperText="We'll never share your email"
      />
      <Input
        label="Password"
        type="password"
        error
        helperText="Password is required"
      />
    </>
  );
}
```

## Development

### Install dependencies

```bash
npm install
```

### Run the local component showcase

```bash
npm run dev
```

This starts a Vite dev server at `http://localhost:5173` that renders every component defined in `src/dev/App.tsx`. Update that file to tweak the examples while iterating on new components.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Format

```bash
npm run format
```

## Publishing

The package is configured to build automatically before publishing:

```bash
npm publish
```

## License

ISC
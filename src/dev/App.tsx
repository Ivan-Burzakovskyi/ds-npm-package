import React from 'react';
import { Button, type ButtonProps } from '../components/Button';
import { Input, type InputProps } from '../components/Input';
import './App.css';

type ShowcaseConfig<T> = {
  title: string;
  description?: string;
  props: T;
};

const buttonVariants: Array<NonNullable<ButtonProps['variant']>> = [
  'primary',
  'secondary',
  'outline',
];

const buttonDescriptions: Record<
  NonNullable<ButtonProps['variant']>,
  string
> = {
  primary: 'High-emphasis action',
  secondary: 'Secondary action with softer contrast',
  outline: 'Low-emphasis action with outlined style',
};

const buttonSizes: Array<NonNullable<ButtonProps['size']>> = [
  'small',
  'medium',
  'large',
];

const inputSizes: Array<NonNullable<InputProps['size']>> = [
  'small',
  'medium',
  'large',
];

const inputStates: ShowcaseConfig<InputProps>[] = [
  {
    title: 'Default',
    description: 'Placeholder only, useful for quick mocks.',
    props: { placeholder: 'Search components' },
  },
  {
    title: 'With label',
    description: 'Adds context for form inputs.',
    props: { label: 'Email', placeholder: 'name@example.com' },
  },
  {
    title: 'Error state',
    description: 'Highlights validation issues.',
    props: {
      label: 'Email',
      placeholder: 'name@example.com',
      helperText: 'Please enter a valid email address.',
      error: true,
    },
  },
  {
    title: 'Disabled',
    description: 'Communicates read-only values.',
    props: {
      label: 'Disabled field',
      placeholder: 'This field is disabled',
      disabled: true,
    },
  },
];

const App: React.FC = () => {
  const [controlledValue, setControlledValue] = React.useState('Medidata UI');

  return (
    <div className="ds-gallery">
      <header className="ds-gallery__header">
        <p className="ds-gallery__tag">Playground</p>
        <h1>Design System components</h1>
        <p>
          Use this page to preview every component while developing the
          package. Update props in{' '}
          <code className="ds-gallery__inline-code">src/dev/App.tsx</code> to
          experiment quickly.
        </p>
      </header>

      <section className="ds-gallery__section">
        <div className="ds-gallery__section-header">
          <h2>Button</h2>
          <p>Variants and sizes rendered side-by-side.</p>
        </div>
        <div className="ds-gallery__grid">
          {buttonVariants.map((variant) => (
            <React.Fragment key={variant}>
              {buttonSizes.map((size) => (
                <article
                  key={`button-${variant}-${size}`}
                  className="ds-gallery__example"
                >
                  <div className="ds-gallery__label">
                    {variant} · {size}
                  </div>
                  <p className="ds-gallery__description">
                    {buttonDescriptions[variant]}
                  </p>
                  <Button
                    text={`${variant} ${size}`}
                    variant={variant}
                    size={size}
                  />
                </article>
              ))}
            </React.Fragment>
          ))}
          <article className="ds-gallery__example">
            <div className="ds-gallery__label">Disabled</div>
            <p className="ds-gallery__description">
              Demonstrates the disabled appearance.
            </p>
            <Button text="Disabled" disabled />
          </article>
        </div>
      </section>

      <section className="ds-gallery__section">
        <div className="ds-gallery__section-header">
          <h2>Input</h2>
          <p>Common states and sizes for the text input component.</p>
        </div>

        <div className="ds-gallery__grid">
          {inputStates.map((state) => (
            <article
              key={`input-${state.title}`}
              className="ds-gallery__example"
            >
              <div className="ds-gallery__label">{state.title}</div>
              {state.description && (
                <p className="ds-gallery__description">{state.description}</p>
              )}
              <Input {...state.props} />
            </article>
          ))}
          <article className="ds-gallery__example">
            <div className="ds-gallery__label">Controlled</div>
            <p className="ds-gallery__description">
              Mirrors component value via React state.
            </p>
            <Input
              label="Project name"
              helperText="Try typing to see updates."
              value={controlledValue}
              onChange={(event) => setControlledValue(event.target.value)}
            />
          </article>
        </div>

        <div className="ds-gallery__grid ds-gallery__grid--compact">
          {inputSizes.map((size) => (
            <article
              key={`input-size-${size}`}
              className="ds-gallery__example"
            >
              <div className="ds-gallery__label">Size: {size}</div>
              <Input
                label="Label"
                size={size}
                placeholder={`Placeholder (${size})`}
              />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;


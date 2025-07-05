# Design System Documentation

## Overview
This design system provides a comprehensive set of design tokens, components, and utilities for building consistent, accessible, and performant user interfaces.

## Design Tokens

### Colors
Our color system is built on semantic color scales with 50-900 variants for primary, secondary, accent, and neutral colors.

```css
/* Primary Colors */
--color-primary-50: #eff6ff;
--color-primary-500: #3b82f6; /* Main primary color */
--color-primary-900: #1e3a8a;

/* Semantic Mappings */
--color-primary: var(--color-primary-600);
--color-text: var(--color-neutral-800);
--color-background: var(--color-neutral-50);
```

### Typography
Fluid typography using `clamp()` for responsive scaling:

```css
--font-size-xs: clamp(0.75rem, 1.5vw, 0.875rem);
--font-size-base: clamp(1rem, 2.5vw, 1.125rem);
--font-size-5xl: clamp(3rem, 7vw, 4.5rem);
```

### Spacing
8px-based spacing scale with responsive values:

```css
--space-1: clamp(0.25rem, 1vw, 0.5rem);    /* 4px - 8px */
--space-4: clamp(1rem, 2.5vw, 1.25rem);    /* 16px - 20px */
--space-12: clamp(3rem, 6vw, 4rem);        /* 48px - 64px */
```

## Components

### Buttons
```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-outline">Outline Button</button>
<button class="btn btn-ghost">Ghost Button</button>

<!-- Sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### Cards
```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
    <p class="card-subtitle">Card subtitle</p>
  </div>
  <div class="card-body">
    <p class="card-text">Card content goes here.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>
```

### Forms
```html
<div class="form-group">
  <label class="form-label" for="email">Email</label>
  <input class="form-control" type="email" id="email" placeholder="Enter email">
  <div class="form-help">We'll never share your email.</div>
</div>
```

## Layout System

### Container
```html
<div class="container">
  <!-- Content with responsive max-width -->
</div>

<div class="container-fluid">
  <!-- Full-width content with padding -->
</div>
```

### Grid System
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Grid item 1</div>
  <div>Grid item 2</div>
  <div>Grid item 3</div>
</div>
```

### Flexbox Utilities
```html
<div class="flex items-center justify-between">
  <div>Left content</div>
  <div>Right content</div>
</div>
```

## Spacing Utilities

### Margin
```html
<div class="m-4">Margin on all sides</div>
<div class="mx-auto">Horizontal margin auto</div>
<div class="mt-6">Top margin</div>
```

### Padding
```html
<div class="p-6">Padding on all sides</div>
<div class="px-4 py-2">Horizontal and vertical padding</div>
```

### Gap
```html
<div class="flex gap-4">Flex with gap</div>
<div class="grid gap-6">Grid with gap</div>
```

## Responsive Design

### Breakpoints
- `xs`: 320px
- `sm`: 576px
- `md`: 768px
- `lg`: 992px
- `xl`: 1200px
- `xxl`: 1400px

### Responsive Utilities
```html
<div class="block md:flex lg:grid">
  <!-- Block on mobile, flex on tablet, grid on desktop -->
</div>

<div class="text-center md:text-left">
  <!-- Centered text on mobile, left-aligned on tablet+ -->
</div>
```

## Accessibility

### Focus States
All interactive elements have visible focus indicators:
```css
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Touch Targets
Minimum touch target size of 44px:
```css
--touch-target-min: 44px;
--touch-target-comfortable: 48px;
```

### Screen Reader Support
```html
<span class="sr-only">Screen reader only text</span>
<a href="#main" class="skip-link">Skip to main content</a>
```

## Performance Optimizations

### Lazy Loading
```jsx
import LazyImage from './components/LazyImage/LazyImage';

<LazyImage 
  src="/path/to/image.jpg" 
  alt="Description"
  loading="lazy"
/>
```

### Code Splitting
```jsx
const ComponentName = lazy(() => import('./ComponentName'));

<Suspense fallback={<div>Loading...</div>}>
  <ComponentName />
</Suspense>
```

## Best Practices

### CSS Organization
1. Use design tokens for all values
2. Follow mobile-first responsive design
3. Use semantic class names
4. Avoid `!important` declarations
5. Group related styles together

### Performance
1. Use lazy loading for images and components
2. Implement proper caching strategies
3. Optimize images with WebP format
4. Use CSS custom properties for theming
5. Minimize CSS and JavaScript bundles

### Accessibility
1. Provide alt text for images
2. Use semantic HTML elements
3. Ensure sufficient color contrast
4. Support keyboard navigation
5. Test with screen readers

## Migration Guide

### From Bootstrap
1. Replace Bootstrap classes with design system utilities
2. Update spacing using our spacing scale
3. Replace Bootstrap components with our components
4. Update color references to use design tokens

### Example Migration
```html
<!-- Before (Bootstrap) -->
<div class="container-fluid">
  <div class="row">
    <div class="col-md-6 mb-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Title</h5>
          <p class="card-text">Content</p>
          <a href="#" class="btn btn-primary">Button</a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- After (Design System) -->
<div class="container-fluid">
  <div class="grid md:grid-cols-2 gap-6">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Title</h3>
        <p class="card-text">Content</p>
        <button class="btn btn-primary">Button</button>
      </div>
    </div>
  </div>
</div>
```

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing
When adding new components or utilities:
1. Follow existing naming conventions
2. Use design tokens for all values
3. Ensure responsive behavior
4. Add accessibility features
5. Document usage examples
6. Test across supported browsers
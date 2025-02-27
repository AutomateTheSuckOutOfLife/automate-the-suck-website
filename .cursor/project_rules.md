# Automate The Suck - Design System Rules

## Color System

Our website uses a design token system implemented through Tailwind CSS to ensure consistent styling across light and dark modes. Always use these tokens instead of hard-coded color values.

> **Note on Color Role Swap:** In our design system, we intentionally swap some color roles between light and dark modes. In light mode, green tones are primary, while in dark mode, purple becomes the primary color. This is a deliberate design choice to optimize for each mode's visual hierarchy.

### Base Colors

- **Primary**: `text-primary`, `bg-primary`, `border-primary`
  - Light mode: Sage Green (#3A625C)
  - Dark mode: Use `dark:text-dark-primary`, `dark:bg-dark-primary`, `dark:border-dark-primary` (Purple #984F83)

- **Secondary**: `text-secondary`, `bg-secondary`, `border-secondary`
  - Light mode: Lighter Sage (#4A7A73)
  - Dark mode: Use `dark:text-dark-secondary`, `dark:bg-dark-secondary`, `dark:border-dark-secondary` (Green #3A625C)

- **Accent**: `text-accent`, `bg-accent`, `border-accent`
  - Light mode: Dark green (#343B34)
  - Dark mode: Use `dark:text-dark-text`, `dark:bg-dark-text`, `dark:border-dark-text` (Light #E6EBE4)

### Link Colors

- **Base Link**: `text-link-base`
  - Light mode: Primary color (Sage Green)
  - Dark mode: Use `dark:text-link-dark-base` (Pink #FFCEF1)

- **Hover Link**: `hover:text-link-hover`
  - Light mode: Secondary color (Lighter Sage)
  - Dark mode: Use `dark:hover:text-link-dark-hover` (Light Pink #FFE5F4)

### Button Colors

- **Primary Button**: `bg-button-primary`
  - Light mode: Primary color (Sage Green)
  - Dark mode: Use `dark:bg-dark-button` (Purple #984F83)

- **Hover Button**: `hover:bg-button-hover`
  - Light mode: Secondary color (Lighter Sage)
  - Dark mode: Use `dark:hover:bg-dark-button-hover` (Pink #FFCEF1)

- **Light Button Background**: `bg-button-light`
  - Light mode: Light green (#F0FFF3)
  - Dark mode: Use `dark:bg-dark-secondary` (Green #3A625C)

### Highlight/Callout Colors

- **Light Highlight**: `bg-highlight-light`
  - Light mode: Light Pink (#FFE5F4)
  - Dark mode: Use `dark:bg-highlight-dark` (Purple #984F83)

## Dark Mode Implementation

Always include dark mode variants for all color-related classes. The pattern is:

```html
<div class="text-accent dark:text-dark-text bg-button-light dark:bg-dark-secondary">
  Content
</div>
```

### Key Dark Mode Rules

1. **Text Colors**: Always pair `text-accent` with `dark:text-dark-text` for proper contrast
2. **Backgrounds**: 
   - Use `bg-button-light dark:bg-dark-secondary` for light backgrounds
   - Use `bg-primary dark:bg-dark-primary` for colored backgrounds
   - Use `bg-highlight-light dark:bg-highlight-dark` for callout sections
3. **Borders**: Always include `dark:border-dark-primary` when using `border-primary`
4. **Links**: Always include both `dark:text-link-dark-base` and `dark:hover:text-link-dark-hover`
5. **Buttons**: Always include both `dark:bg-dark-button` and `dark:hover:bg-dark-button-hover`

## Common Components

### Cards

Cards should use this pattern:
```html
<div class="bg-button-light dark:bg-dark-secondary border-2 border-primary/20 dark:border-dark-primary/20 rounded-lg p-6">
  <h3 class="text-xl font-serif font-bold text-accent dark:text-dark-text">Title</h3>
  <p class="text-accent/80 dark:text-dark-text/80">Content</p>
</div>
```

### Form Elements

Form elements should use this pattern:
```html
<input
  type="text"
  class="border border-primary dark:border-dark-primary bg-white dark:bg-dark-secondary text-accent dark:text-dark-text placeholder-accent/60 dark:placeholder-dark-text/60 focus:outline-none focus:border-secondary dark:focus:border-dark-accent"
/>
```

### Buttons

Buttons should use this pattern:
```html
<button class="bg-button-primary hover:bg-button-hover text-white dark:bg-dark-button dark:hover:bg-dark-button-hover">
  Button Text
</button>
```

### Highlight/Callout Sections

Highlight sections should use this pattern:
```html
<div class="bg-highlight-light dark:bg-highlight-dark rounded-lg p-6 text-accent dark:text-dark-text">
  Highlighted Content
</div>
```

## Typography

- **Headings**: Use `font-serif font-bold text-accent dark:text-dark-text`
- **Body Text**: Use `text-accent dark:text-dark-text`
- **Subdued Text**: Use `text-accent/80 dark:text-dark-text/80`

## Transitions

Always include transition classes for smooth theme changes:
```html
<div class="transition-colors duration-300">
  Content
</div>
```

## Best Practices

1. **Never use hard-coded colors** - Always use the design tokens
2. **Always include dark mode variants** - Every color class should have a dark mode equivalent
3. **Check contrast in both modes** - Ensure text is readable in both light and dark modes
4. **Use opacity for subtle variations** - Use `text-accent/80` instead of creating new colors
5. **Test theme transitions** - Ensure smooth transitions between light and dark modes

By following these rules, we maintain a consistent design system that works well in both light and dark modes and provides a great user experience. 
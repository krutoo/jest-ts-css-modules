# Example of bug with jest + ts-jest + typescript-plugin-css-modules + jest-css-modules-transform

When run:

```bash
npm run test -- --watchAll
```

First run fails with:
```
  ● Test suite failed to run

    src/components/second/index.tsx:2:20 - error TS2307: Cannot find module './second.scss' or its corresponding type declarations.

    2 import styles from './second.scss';
                         ~~~~~~~~~~~~~~~
```

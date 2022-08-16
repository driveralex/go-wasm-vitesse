# Go setup

I'm trying to use wasm written in go with vitesse ().

## Go -> wasm

You will find go files under src/go

## Vitesse Usage

Same as original antfu/vitesse.. i've just removed unused pages, component, store, etc..

### Development

Install
```bash
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
````

Just run and visit http://localhost:3333

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

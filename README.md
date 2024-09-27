# React Hooked 🪝

React hooks, without package installation.

> It's like shadcn/ui but for hooks !

## Why?

The idea of adding dependencies in my projects to use 2 or 3 React hooks bothered me. Why should I add another dependency ? Just for one or two hooks ? No way !

Here comes React Hooked : React hooks, without package installation.

Simple as that.

- No package installation
- 100% Typescript
- JSDoc
- Examples
- Just copy paste hooks in your code or use curl/wget

Why bother with an extra dependency when you can just grab the hooks you need ?

## CLI Usage

You can get all hooks with the following CLI options : 

- Shadcn CLI
- CURL
- WGET

## How to contribute ?

You can contribute by adding new hooks or by fixing bugs.

1. Fork the repo
2. Create a new branch
3. Add your hook in the `src/hooks` folder - JSDoc must be added with the correct types
4. Add an example in the `examples` folder - The example file must be named `Use{HookName}Example.tsx`
5. Create a pull request

### Best practices

- Use the same name for the hook and the file
- Use `export default function` for the hook
- Try out the example in the browser
- Avoid requiring dependencies

### Running locally

```sh
npm install
npm run dev
```

Then open `http://localhost:4321` in your browser.

## License

MIT

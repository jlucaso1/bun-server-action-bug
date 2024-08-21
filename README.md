This is a minimal project to reproduce the bug described in https://github.com/oven-sh/bun/issues/13444

## How to reproduce

First, build the project:

```bash
bun run build
```

Then, run the server with `bun`:

```bash
bun run start:bun
```

Finally, open [http://localhost:3000](http://localhost:3000) with your browser and click on the button `Inexistent page`, first time will work, but the next time it will fail with the following error: `Error: Connection closed.`.

If you try to run with node, it will work: `bun run start:node`.

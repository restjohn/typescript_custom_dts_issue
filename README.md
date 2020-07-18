# Migrating Legacy JS Node to TypeScript with Custom Type Definitions

This is a simple repository to demonstrate using TypeScript custom type
definitions (`.d.ts` files) to help transition a JavaScript Node project to
TypeScript.

Unfortunately, there is a TypeScript [issue](https://github.com/microsoft/TypeScript/issues/35296)
that prevents the TypeScript compiler from emitting custom type definitions from
the input files to the output directory.

## Build and Run
```
npm install
npm test
```
You will notice that `npm test` exits with an error because the script attempts
to build the `test` TypeScript project, which references the `src` TypeScript
project.  The `test` project depends on the custom type definition in `src`,
which the compiler does not emit to the `src` output directory, `lib`, so
`test` fails to compile.

## Build and Run with Custom Types
```
rm -rf lib test-lib
npm run test_with_types
```
The `test_with_types` scripts includes a step that copies the custom type 
definition files from `src` to `lib`.  Now you will see that the the project
builds correctly.  However, this build requires an explicit compilation of
`src`, then copying the `.d.ts` files, then compiling `test`, which defeats
the purpose of [project references](https://www.staging-typescript.org/docs/handbook/project-references.html)
with the `-b` flag for incremental builds.

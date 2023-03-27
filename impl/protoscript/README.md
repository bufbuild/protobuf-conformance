# ProtoScript

[ProtoScript](https://github.com/TateThurston/protoScript)


## Caveats

Requires a patch to compile the test message protos. Until patched upstream, the package is vendored with the patched changes.

Compiles BigInt literals, so TypeScript must target ES2020.

Tests pass and fail intermittently, but it's unclear how any pass at all because the `corecursive` nested message results in a circular initialization that overflows the stack when parsing request payloads.

# Problem
When Cadence scripts calls `panic` we are getting `failed to encode value: unsupported value: <nil>, <nil>` 
instead of actual error we see in emulator output.

# Who is affected
Pretty much every developer who is using `fcl` and writes Cadence, since it's much harder to find where error occurred.

# How to replicate
- launch emulator with `flow emulator -v`
- run script from root of this project `node index.js`

# Expected outcome
```js
[Error Code: 1101] cadence runtime error Execution failed:
error: panic: Uh-oh
 --> a0b8feeb4782c0bab8156663a881e3748f472f83332304cb593b15a45eaaeea7:2:16
  |
2 |                 panic("Uh-oh")
  |                 ^^^^^^^^^^^^^^
```

# Additional notes
I've seen this working just fine on my Linux machine returning `[error code 1101]` and then actual place where this is happening. 
Same package versions, Node v16.3.0.

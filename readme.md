# Only1.App Assignment

## Tasks 1-3

* in the root folder run `npm ci` to install the dependencies.
* run `npm run test` to run the unit tests.
* all tasks are located inside `task1-3` folder

### assumption to TASK 1 
I understand the key could be any string, so I have used `Record<string, string | { address: keyof Addresses }>` as the type for the `Addresses` type. 
However, it would be safer to restrict the keys to a specific set of strings, so I would suggest using a union type for the keys, e.g. 
```
type AddressKey = 'staking_program_id' | 'system_program_id' | 'locked_token_mint_id'
type Addresses = Record<AddressKey, string | { address: AddressKey }>
```

## Only1 nextjs app

* go inside `only1-app` folder 
* run `npm ci` to install the dependencies.
* run `npm run dev` to start the app.
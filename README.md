This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Clone the git repository

```
git clone https://github.com/dzhan111/DavidDocs.git
```

Then cd into the directory
```
cd DavidDocs
```


Obtain API keys + put in .env.local file
from 
https://clerk.com/
https://liveblocks.io/


```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
LIVEBLOCKS_SECRET_KEY=
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

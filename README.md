├── README.md
├── package-lock.json
├── package.json
├── public
│   │   favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   ├── _redirects
│   └── index.html
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── ThemeSwitcher.tsx
|   ├── pages
|   │   ├── CategoryProducts.tsx
|   │   ├── HomePage.tsx
|   │   ├── LandingPage.tsx
|   │   ├── LoginPage.tsx
|   │   ├── NotFoundPage.tsx
|   │   ├── ProductPage.tsx
|   │   ├── ProfilePage.tsx
|   │   └── RegisterPage.tsx
│   ├── hooks
│   │   ├── useActionDispatch.ts
│   │   ├── useDebounce.ts
│   │   └── useSelectorHook.ts
│   ├── index.tsx
│   ├── redux
│   │   ├── reducers
|   |   |   ├── cartegoriesReducer.ts
│   │   │   ├── cartReducer.ts
│   │   │   ├── productsReducer.ts
│   │   │   └── usersReducer.ts
│   │   └──  store.ts  
│   ├── styles
|   │   ├───component
|   │   │   ├── CustomBtn.tsx
|   │   │   └── SearchWrapper.tsx
|   │   │
|   │   ├───page
|   │   │   ├── _footer.scss
|   │   │   ├── _header.scss   
|   │   │   ├── _hompage.scss
|   │   │   ├── _landingpage.scss
|   │   │   ├── _loginpage.scss
|   │   │   ├── _notfound.scss
|   │   │   └───_productpage.scss
|   │   └───variables
|   │       ├── _colors.scss
|   │       ├── _fonts.scss
|   │       └── _spaces.scss
|   ├───test
|   │   ├───data
|   │   │    ├── cart.ts
|   │   │    ├── cartegories.ts
|   │   │    ├── products.ts
|   │   │    └── users.ts
|   │   │
|   │   ├───mock
|   │   │    ├── productServer.ts
|   │   │    └── userServer.ts
|   │   │
|   │   ├───reducers
|   │   │    ├── cartReducer.test.ts
|   │   │    ├── productsReducer.test.ts
|   │   │    └── usersReducer.test.ts
|   │   │
|   │   └───shared
|   │         └── store.ts
|   │
|   ├───theme
|   │       ThemeContext.tsx
│   └── types
│      ├── Cart.ts
│       ├── Category.ts
│       ├── CreateProduct.ts
│       ├── Error.ts
│       ├── Product.ts
│       ├── ProductUpdate.ts
│       └── User.ts
└── tsconfig.json

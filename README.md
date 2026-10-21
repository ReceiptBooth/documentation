# Receipt Booth Help Centre

Source for https://docs.receiptbooth.com, built with [Docusaurus](https://docusaurus.io/).

- `docs/` holds the guides. Folders are sidebar sections (order set in `_category_.json`); each page needs `title`, `sidebar_position` and a `description`.
- `src/pages/index.tsx` is the homepage.
- Old URLs are kept with `slug:` front matter, so please do not remove those.

```bash
npm install
npm start        # local preview
npm run build    # production build into build/
```

Pushing to `main` may publish the live site. Get approval before you push.

Contributing
============

Welcome, so you are thinking about contributing ?
Awesome, this a great place to start.

Setup
-----

```bash
git clone git@github.com:epfl-si/epfl-theme-elements.git
cd epfl-theme-elements
yarn
```

Test
----

```bash
yarn test
```

Build
-----

```bash
yarn run release
```

and check the `dist` and `release` folders.

Release
-------

  1. Update [CHANGELOG.md](CHANGELOG.md)
  2. Update the version in [package.json](package.json) and Ansible inventories.
  3. Build and commit the `dist*` folders
  4. Deploy and tagging (check below)
  5. Create the release package in GitHub
  6. Publish with ``npm publish``

Deploy
------

```bash
# Help
./ansible/web2018sible --help

# Production
./ansible/web2018sible --prod
```

Tagging
-------

```bash
git tag -a v<version> -m "EPFL Theme Elements - <version>"
git push --tags
```

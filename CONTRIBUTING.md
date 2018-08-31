Contributing
============

Welcome, so you are thinking about contributing ?
Awesome, this a great place to start.

Setup
-----

```bash
git clone git@github.com:epfl-idevelop/elements.git
git clone git@github.com:epfl-idevelop/epfl-theme-elements.git
cd elements
yarn
cd ../epfl-theme-elements
npm i
```

Test
----

```bash
npm t
```

Build
-----

```bash
npm run build
```

and check the `dist` folder.

Release
-------

```bash
npm run release
```

and check the `release` folder.

Deploy
------

Copy the deploy tool on the servers (if doesn't exist on the server):
```bash
./deploy_tool/web2018.sh deploy_tools
```

Deploy the archive on the servers:
```bash
scp release/*cdn.zip <user>@<server>:~
```

Then on each server:
```bash
./web2018.sh deploy <archive>
```


License
-------

Apache License 2.0

(c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018.

See the [LICENSE](LICENSE) file for more details.

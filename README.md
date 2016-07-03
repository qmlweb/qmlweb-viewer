# QmlWeb-based QML viewer

[![Join the chat at https://gitter.im/qmlweb/qmlweb](https://badges.gitter.im/qmlweb/qmlweb.svg)](https://gitter.im/qmlweb/qmlweb?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![npm](https://img.shields.io/npm/v/qmlweb-viewer.svg)](https://www.npmjs.com/package/qmlweb-viewer)
[![GitHub tag](https://img.shields.io/github/tag/qmlweb/qmlweb-viewer.svg)](https://github.com/qmlweb/qmlweb-viewer/releases)

This is a QmlWeb-based GUI viewer for `*.qml` files.

Based on [QmlWeb](https://github.com/qmlweb/qmlweb) and [Electron](https://github.com/electron/electron).

This is not a replacement to Qt QML by any means and should not be used in
production.

The only purpose of this tool is to test QmlWeb and visually compare the rendered
results with Qt QML output (e.g. `qmlscene`).

## Installation and usage

#### Prerequisites

You need Node.js with npm to install and run qmlweb-viewer.

See [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/)
or [Node Version Manager](http://nvm.sh) for more detailed instructions on that.

#### Local install (to a subdirectory):
```sh
npm i qmlweb-viewer
./node_modules/.bin/qmlweb-viewer path-to-file.qml
```

This way, `qmlweb-viewer` will be installed into the `node_modules` subdirectory.

#### Global install

See [Fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions)
to fix permissions issues, running `npm` as root is not recommended.

```sh
npm install -g qmlweb-viewer
qmlweb-viewer path-to-file.qml
```

This way, you can use `qmlweb-viewer` from any directory, it will be added into
your `PATH`.

## Debugging

Launch with the `--debug` flag, e.g. `qmlweb-viewer --debug path-to-file.qml`
to open a Developer Tools window alongside with your QML file.

### Using with a development version of QmlWeb

To use with QmlWeb from the `master` branch (or any other non-release version),
follow the [installation](#installation-and-usage) steps, then remove the
`./node_modules/qmlweb/lib` directory and replace it with a symlink to a `./lib`
directory of your development QmlWeb version.

## License

QmlWeb-Viewer is licensed under the MIT license, see
[LICENSE](https://github.com/qmlweb/qmlweb-parser/blob/master/LICENSE).

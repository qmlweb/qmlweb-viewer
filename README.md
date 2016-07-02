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

## Usage

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

## License

QmlWeb-Viewer is licensed under the MIT license, see
[LICENSE](https://github.com/qmlweb/qmlweb-parser/blob/master/LICENSE).

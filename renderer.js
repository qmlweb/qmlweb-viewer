const remote = require('electron').remote;
const qmlwebViewer = remote.getGlobal('qmlwebViewer');

const Engine = typeof QmlWeb !== 'undefined' && QmlWeb.QMLEngine
                ? QmlWeb.QMLEngine
                : QMLEngine;
const engine = new Engine();
engine.loadFile(qmlwebViewer.argument);
engine.start();
const qml = engine.rootObject;

const window = remote.getCurrentWindow();
window.setSize(qml.width, qml.height);

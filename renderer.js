const remote = require('electron').remote;
const qmlwebViewer = remote.getGlobal('qmlwebViewer');

const engine = new QMLEngine();
engine.loadFile(qmlwebViewer.argument);
engine.start();
const qml = engine.rootObject;

const window = remote.getCurrentWindow();
window.setSize(qml.width, qml.height);

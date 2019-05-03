import { Observable } from 'rxjs';
var observable1 = Observable.create((observer) => {
    observer.next('Observable One is alive');
    setInterval(() => {
        observer.next('Observable One');
    }, 5000);
});
var subscription1 = observable1.subscribe((x) => logItem(x, 1));
function logItem(val, colId) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById(colId == 1 ? "list1" : "list2").appendChild(node);
}
document.getElementById('unsubscribeBtn1').addEventListener('click', () => subscription1.unsubscribe());
//# sourceMappingURL=index.js.map
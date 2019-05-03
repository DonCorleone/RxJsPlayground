import { Observable, Observer } from 'rxjs';

var observable1: Observable<string> = Observable.create((observer: Observer<string>) => {
    observer.next('Observable One is alive');
    setInterval(() => {
        observer.next('Observable One');
    }, 5000);
});

var observable2: Observable<string> = Observable.create((observer: Observer<string>) => {
    observer.next('Observable Two is alive');
    setInterval(()=> {
        observer.next('Observable Two');
    }, 2500);
})

var subscription1 = observable1.subscribe(
    (x: string) => logItem(x, 1)
);

var subscription2 = observable2.subscribe(
    (x: string) => logItem(x,2)
);

function logItem(val: string, colId: number) {

    var node = document.createElement("li");
    var textNode = document.createTextNode(val);

    node.appendChild(textNode);

    document.getElementById(colId == 1 ? "list1" : "list2").appendChild(node);
}

document.getElementById('unsubscribeBtn1').addEventListener('click', () => subscription1.unsubscribe());
document.getElementById('unsubscribeBtn2').addEventListener('click', () => subscription2.unsubscribe());
document.getElementById('addSubscriptionBtn').addEventListener('click', () => subscription2.add(subscription1));
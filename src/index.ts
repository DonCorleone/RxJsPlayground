import { Observable, Observer } from 'rxjs';

var observable: Observable<any> = Observable.create((observer: Observer<any>) => {
    observer.next('Hello World');
    observer.next('Hello Again');
    observer.complete();
    observer.next('bye');

});

observable.subscribe(
    (x: any) => logItem(x),
    (error: any) => logItem('Error' + error),
    () => logItem('Finito')
);

function logItem(val: string) {

    var node = document.createElement("li");
    var textNode = document.createTextNode(val);

    node.appendChild(textNode);
    document.getElementById("list").appendChild(node);
}
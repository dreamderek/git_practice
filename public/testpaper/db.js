let table = document.querySelector("table#data");
const start = table.innerHTML;

var add = () => {
    let form = document.querySelector('form#add_data');
    let t = document.querySelectorAll('td');

    db.collection('Main').doc((t.length / 4) + "").set({
        text: form.text.value,
        func: form.func.value.split(',')
    });
    form.text.value = "";
    form.func.value = "";
    reset();

}
var dele = (e) => {
    db.collection('Main').doc(e.id).delete().then(() => {
        reset()
    });

}
var reset = () => {
    table.innerHTML = start;

    db.collection('Main').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {

            let tr = document.createElement("tr");
            let td0 = document.createElement("td");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let a = document.createElement("buttom");

            td0.innerHTML = doc.id;
            td1.innerHTML = doc.data().text;
            td2.innerHTML = doc.data().func;

            a.innerHTML = "x";
            a.setAttribute("id", doc.id);
            a.setAttribute("onclick", "dele(this)");
            td3.appendChild(a);

            tr.appendChild(td0);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr);
        });
    });
    return;
}
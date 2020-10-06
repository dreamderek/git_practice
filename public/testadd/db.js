let table = document.querySelector("table#data");
const start = table.innerHTML;

var add = () => {
    let form = document.querySelector('form#add_data');
    let t = document.querySelectorAll('td');

    db.collection('Main').add({
        text: form.text.value,
        func: form.func.value.split(','),
        Origin: form.Origin.value
    });
    form.text.value = "";
    form.func.value = "";
    form.Origin.value = "";
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

            // 以增加內文表列db資料
            // tr.innerHTML =
            //     `<td align="left">${doc.data().text}</td>
            // <td>${doc.data().func}</td>
            // <td>${doc.data().Origin}</td>
            // <td><p id="${doc.id}" onclick="dele(this)">x</p></td>`;

            // 以增加taget表列db資料

            let td1 = document.createElement("td"); {
                td1.setAttribute("align", "left");
                td1.innerHTML = doc.data().text;
            }

            let td2 = document.createElement("td"); {
                td2.innerHTML = doc.data().func;
            }

            let td3 = document.createElement("td"); {
                td3.innerHTML = doc.data().Origin;
            }

            let td4 = document.createElement("td"); {
                let d = document.createElement("p"); {
                    d.innerHTML = "x";
                    d.setAttribute("id", doc.id);
                    d.setAttribute("onclick", "dele(this)");
                }
                td4.appendChild(d);
            }

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            table.appendChild(tr);
        });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    //XMLHTTPREQUEST
    const server = 'https://jsonplaceholder.typicode.com/posts';

    const sendData = (data, callBack, falseCallBack) => {
        const request = new XMLHttpRequest();
        request.open('POST', server);
        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) return;
            if (request.status === 200 || request.status === 201) {
                const response = JSON.parse(request.responseText);
                callBack(response.id);
            } else {
                falseCallBack(request.status);
                throw new Error(request.statusText);
            }
        })
        request.send(data);
    }

    const formElems = document.querySelectorAll('.form');
    const formHandler = (form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = {};

            for (const {
                    name,
                    value
                } of form.elements) {
                if (name) {
                    data[name] = value
                }
            }
            const smallElem = document.createElement('small');

            sendData(JSON.stringify(data),
                (id) => {
                    smallElem.textContent = `Заявка №${id} принята`;
                    smallElem.style.color = 'green';
                    form.append(smallElem)
                },
                (err) => {
                    smallElem.textContent = 'Техническая заминка... Пробуйте похже';
                    smallElem.style.color = 'red';
                    form.append(smallElem)
                });

            form.reset(); // очистка формы
        })
    }

    formElems.forEach(formHandler);


});
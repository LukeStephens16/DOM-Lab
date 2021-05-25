document.addEventListener('DOMContentLoaded', function () {


    let button = document.createElement('button');
    button.innerHTML = 'Add Square';
    document.body.appendChild(button);


    let idCounter = 1
    let container = document.createElement('div');
    document.body.appendChild(container);


    let colorsArr = ['blue', 'green', 'pink', 'orange', 'turquoise', 'violet', 'red', 'brown'];


    button.addEventListener('click', function () {
        let square = document.createElement('div');
        square.className = 'square';
        square.id = idCounter++
        container.appendChild(square);


        square.addEventListener('click', function () {
            square.style.background = colorsArr[Math.floor(Math.random() * colorsArr.length)];

        });


        square.addEventListener("dblclick", function () {
            if (square.id % 2 === 0) {

                let elementID = parseInt(square.id) + 1;

                let element = document.getElementById(elementID);

                if (element == null) {
                    alert("Square with ID " + elementID + " does not exist.")
                } else {
                    element.parentNode.removeChild(element);
                }
            } else {

                let elementID = parseInt(square.id) - 1;

                let element = document.getElementById(elementID);

                if (element == null) {
                    alert("Square with ID " + elementID + " does not exist.")
                } else {
                    element.parentNode.removeChild(element);

                };

            };

        });

    });

});
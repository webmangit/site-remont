export function isCalc() {
    // Код для формы calcForm
    if (document.forms.calcForm) {
        // Получение конкретной формы
        let getForm = document.forms.calcForm;
        // Получение всех seleсt
        let allSelect = getForm.querySelectorAll('.calc-data__item-select');
        // Получение конкретных select элементов формы
        let typeRoom = getForm.typeRoom;
        let typeRepair = getForm.typeRepair;
        let typeHome = getForm.typeHome;

        // Получение элемента с результатом и назначение результата по умолчанию
        let result = getForm.querySelector('.calc-result__price-number');
        let counter = 32000;
        result.innerHTML = counter;

        // Навешивание события изменения и вызов функции при изменениях в select
        for (let i = 0; i < allSelect.length; i++) {
            allSelect[i].addEventListener("change", function () {
                if (typeRoom.value == "Ванная") {
                    if (typeRepair.value == "Эконом" && typeHome.value == "Новостройка") {
                        counter = 32000;
                    } else if (typeRepair.value == "Эконом" && typeHome.value == "Вторичка") {
                        counter = 33000;
                    } else if (typeRepair.value == "Эконом" && typeHome.value == "Старый фонд") {
                        counter = 38000;
                    } else if (typeRepair.value == "Капитальный" && typeHome.value == "Новостройка") {
                        counter = 52000;
                    } else if (typeRepair.value == "Капитальный" && typeHome.value == "Вторичка") {
                        counter = 54000;
                    } else if (typeRepair.value == "Капитальный" && typeHome.value == "Старый фонд") {
                        counter = 58000;
                    } else if (typeRepair.value == "Дизайнерский" && typeHome.value == "Новостройка") {
                        counter = 72000;
                    } else if (typeRepair.value == "Дизайнерский" && typeHome.value == "Вторичка") {
                        counter = 78000;
                    } else if (typeRepair.value == "Дизайнерский" && typeHome.value == "Старый фонд") {
                        counter = 86000;
                    }
                } else if (typeRoom.value == "Туалет") {
                    if (typeRepair.value == "Эконом" && typeHome.value == "Новостройка") {
                        counter = 14000;
                    } else if (typeRepair.value == "Эконом" && typeHome.value == "Вторичка") {
                        counter = 16000;
                    } else if (typeRepair.value == "Эконом" && typeHome.value == "Старый фонд") {
                        counter = 18000;
                    } else if (typeRepair.value == "Капитальный" && typeHome.value == "Новостройка") {
                        counter = 24000;
                    } else if (typeRepair.value == "Капитальный" && typeHome.value == "Вторичка") {
                        counter = 26000;
                    } else if (typeRepair.value == "Капитальный" && typeHome.value == "Старый фонд") {
                        counter = 28000;
                    } else if (typeRepair.value == "Дизайнерский" && typeHome.value == "Новостройка") {
                        counter = 37000;
                    } else if (typeRepair.value == "Дизайнерский" && typeHome.value == "Вторичка") {
                        counter = 39000;
                    } else if (typeRepair.value == "Дизайнерский" && typeHome.value == "Старый фонд") {
                        counter = 41000;
                    }
                } else if (typeRoom.value == "Совмещенный с/у") {
                    if (typeRepair.value == "Эконом" && typeHome.value == "Новостройка") {
                        counter = 38000;
                    } else if (typeRepair.value == "Эконом" && typeHome.value == "Вторичка") {
                        counter = 42000;
                    } else if (typeRepair.value == "Эконом" && typeHome.value == "Старый фонд") {
                        counter = 46000;
                    } else if (typeRepair.value == "Капитальный" && typeHome.value == "Новостройка") {
                        counter = 64000;
                    } else if (typeRepair.value == "Капитальный" && typeHome.value == "Вторичка") {
                        counter = 68000;
                    } else if (typeRepair.value == "Капитальный" && typeHome.value == "Старый фонд") {
                        counter = 76000;
                    } else if (typeRepair.value == "Дизайнерский" && typeHome.value == "Новостройка") {
                        counter = 88000;
                    } else if (typeRepair.value == "Дизайнерский" && typeHome.value == "Вторичка") {
                        counter = 92000;
                    } else if (typeRepair.value == "Дизайнерский" && typeHome.value == "Старый фонд") {
                        counter = 98000;
                    }
                }
                result.innerHTML = counter;
            });
        }
    }

    // Код для формы calcFormFlat
    if (document.forms.calcFormFlat) {
        // Получение конкретной формы
        let getForm = document.forms.calcFormFlat;
        // Получение полей взаимодействия
        let typeRepair = getForm.typeRepair;
        let typeHome = getForm.typeHome;
        let spaceFlat = getForm.space;
        let checkboxFlat = getForm.checkbox;
        console.log(checkboxFlat.checked)

        // Получение элемента с результатом и назначение результата по умолчанию
        let result = getForm.querySelector('.calc-result__price-number');
        let counter = 2800 * spaceFlat.value;
        result.innerHTML = counter;

        typeRepair.addEventListener("change", sumResult);
        typeHome.addEventListener("change", sumResult);
        spaceFlat.addEventListener("input", sumResult);
        checkboxFlat.addEventListener("change", sumResult);

        function sumResult() {
            let bathroom = 0;
            if (typeRepair.value == "Эконом" && typeHome.value == "Новостройка") {
                counter = 2800;
                bathroom = 25324;
            } else if (typeRepair.value == "Эконом" && typeHome.value == "Вторичка") {
                counter = 3360;
                bathroom = 30389;;
            } else if (typeRepair.value == "Эконом" && typeHome.value == "Старый фонд") {
                counter = 7650;
                bathroom = 43051;
            } else if (typeRepair.value == "Капитальный" && typeHome.value == "Новостройка") {
                counter = 4500;
                bathroom = 65218;
            } else if (typeRepair.value == "Капитальный" && typeHome.value == "Вторичка") {
                counter = 5400;
                bathroom = 78261;
            } else if (typeRepair.value == "Капитальный" && typeHome.value == "Старый фонд") {
                counter = 7650;
                bathroom = 110870;
            } else if (typeRepair.value == "Дизайнерский" && typeHome.value == "Новостройка") {
                counter = 7000;
                bathroom = 79026;
            } else if (typeRepair.value == "Дизайнерский" && typeHome.value == "Вторичка") {
                counter = 8400;
                bathroom = 94830;
            } else if (typeRepair.value == "Дизайнерский" && typeHome.value == "Старый фонд") {
                counter = 11900;
                bathroom = 134343;
            }

            if (checkboxFlat.checked) {
                result.innerHTML = (counter * spaceFlat.value) + bathroom;
            } else {
                result.innerHTML = counter * spaceFlat.value;
            }
        }
    }
}

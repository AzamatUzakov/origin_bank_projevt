export function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export function handleClick(arg) {
    if (arg.classList.contains("active")) {
        arg.classList.remove("active")
        arg.classList.add("close")
    } else if (!arg.classList.contains("active")) {
        arg.classList.remove("close")
        arg.classList.add("active")
    }
}

export function populateTable(arr, place) {
    place.innerHTML = ""
    for (let item of arr) {
        const row = place.insertRow(-1);
        const id = row.insertCell(0);
        const cart_type = row.insertCell(1);
        const descriptionCell = row.insertCell(2);
        const amountCell = row.insertCell(3);
        const dateCell = row.insertCell(4);

        id.innerHTML = item.id;
        cart_type.innerHTML = item.wallet.name;
        dateCell.innerHTML = `${(getDaysRemaining(item.date) * (-1))} дней назад`;
        descriptionCell.innerHTML = item.category;
        amountCell.innerHTML = item.total.toFixed(2);


        row.append(id, cart_type, descriptionCell, amountCell, dateCell)
        place.append(row)
    }
}

export function getDaysRemaining(targetDateString) {
    const targetDate = new Date(targetDateString);
    const currentDate = new Date();

    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysRemaining;
}
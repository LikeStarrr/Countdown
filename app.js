import { formatDuration, intervalToDuration, compareDesc } from "date-fns";

const input = document.querySelector('.input__data');
const output = document.querySelector('.output__data');

input.addEventListener('input', changeInput);

function changeInput(event) {
    const dateValue = new Date(event.target.value);
    const dateNow = new Date();
    const compare = compareDesc(dateNow, dateValue);
    const duration = formatDuration(
        intervalToDuration({
            start: dateNow,
            end: dateValue
        }),
        { delimiter: ', ' }
    );
    
    setOutput(duration, compare);
}

function setOutput(duration, compare) {
    switch (compare) {
        case 1:
            output.textContent = `in ${duration}`;
            break;
        case -1:
            output.textContent = `${duration} ago`;
            break;
        default:
            output.textContent = 'NOW';
            break;
    }
}
module.exports = function toReadable (number) {
    let i   = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let i10 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let i20 = ['','','twenty','thirty','forty', 'fifty','sixty','seventy','eighty','ninety'];

    let readable = [];

    if (number >= 100) {
        readable.push(i[parseInt(number/100)] + " hundred");
        number = (number % 100 > 0) ? number % 100 : number;
    }

    if (number >= 20) {
        readable.push(i20[parseInt(number / 10)]);
        readable.push(i[parseInt(number % 10)]);
        number = number % 10;
    } else {
        if (number >= 10) {
            readable.push(i10[parseInt(number % 10)]);
        } else {
            if (number >= 1) {
                readable.push(i[number]);
            } else readable = ['zero'];
        }
    }

    return readable.join(" ").trim();
}

const HU = {
    date(date) {
        const log = (locale = `hu-HU`) => {
            const formatDate = new Intl.DateTimeFormat(locale).format(date);
            return `${formatDate}`;
        }
        return log();
    },
    curreny(number) {
        const localizedNumber = new Intl.NumberFormat(`hu-HU`, { style: `currency`, currency: `HUF` }).format(number);
        return `${localizedNumber}`;
    },
    list(arr) {
        let stringArray;
        for(let i=1; i<arr.length-1; i++){
            stringArray = `${arr[0]}, ` + `${arr[i]} és `+ `${arr[arr.length-1]}`;
        }
        return stringArray;
    },
}





export default HU

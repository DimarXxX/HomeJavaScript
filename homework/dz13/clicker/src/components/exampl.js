const format = (number) => {
    if (number < 10) {
        return '0' + number;
    }
    return String(number);
}
const areas = document.getElementsByClassName('area');
const counts = [];
for (let i = 0; i < areas.length; ++i) {
    counts.push(0);
    areas[i].addEventListener('click', () => {
        ++counts[i];
        areas[i].textContent = format(counts[i]);
    });
    areas[i].textContent = format(0);
}


<div className = "field" onClick={this.handleClick}>
{}
</div>
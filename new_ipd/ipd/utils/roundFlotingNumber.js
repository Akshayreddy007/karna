export const round = (num, decimalPlaces = 0) => {
    if (num < 0)
        return -round(-num, decimalPlaces);
    var p = Math.pow(10, decimalPlaces);
    var n = num * p;
    var f = n - Math.floor(n);
    var e = Number.EPSILON * n;

    // Determine whether this fraction is a midpoint value.
    return (f >= .5 - e) ? Math.ceil(n) / p : Math.floor(n) / p;
}
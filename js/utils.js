/* Utils */

// http://stackoverflow.com/questions/1960473/unique-values-in-an-array
Array.prototype.unique = function() {
    var a = [];
    for (var i = 0, l = this.length; i < l; i++)
        if (a.indexOf(this[i]) === -1)
            a.push(this[i]);
    return a;
}

var alternatingColorScale = function() {
    var domain, range;

    function scale(x) {
        return range[domain.indexOf(x) % 2];
    }

    scale.domain = function(x) {
        if (!arguments.length) return domain;
        domain = x;
        return scale;
    }

    scale.range = function(x) {
        if (!arguments.length) return range;
        range = x;
        return scale;
    }

    return scale;
}
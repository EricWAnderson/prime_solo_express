
var convertUSD = function(number){
    var numberUSD = addCommas(number);
    numberUSD = '$' + numberUSD;
    return numberUSD;
};

function addCommas(intNum) {
    return (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

module.exports = convertUSD;
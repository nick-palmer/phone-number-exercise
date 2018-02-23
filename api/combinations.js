const numLetterMap = {
    '0':['0',' '],
    '1':['1'],
    '2':['2','a','b','c'],
    '3':['3','d','e','f'],
    '4':['4','g','h','i'],
    '5':['5','j','k','l'],
    '6':['6','m','n','o'],
    '7':['7','p','q','r','s'],
    '8':['8','t','u','v'],
    '9':['9','w','x','y','z']
}

function getCombos(string) {

    // Break condition
    if (string.length < 1) {
        return string; 
    }

    // List of possible numbers
    let combos = [];

    // The possible substitutions
    let subs = numLetterMap[string.charAt(0)];
    for (let i = 0; i < subs.length; i++) {
        let char = subs[i];
        let remainingString = string.slice(1,string.length);

        if(remainingString === '')
            combos.push(char + remainingString)
        else {
            // Recurse through remaining numbers
            for (let subPermutation of getCombos(remainingString))
                combos.push(char + subPermutation)
        }

    }
    return combos;
}
function getPagedResults(phoneNumber, count, page) {
    let results = getCombos(phoneNumber);
    count = count && count > 0 ? count : 20
    page = page && page > 0 ? page : 1
    return {
        numbers: results.slice(count * (page - 1), count * page),
        totalCount: results.length
    }
}

module.exports = {
    getResults: getPagedResults
}
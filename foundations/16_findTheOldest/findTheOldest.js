const findTheOldest = function (people) {
    const year = new Date().getFullYear();
    let oldest = people.sort((a, b) => {
        if (a.yearOfBirth && a.yearOfDeath && b.yearOfBirth && b.yearOfDeath){
        return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth)}
        else if (!a.yearOfDeath || !b.yearOfDeath){return (year - a.yearOfBirth) - (year - b.yearOfBirth)}
    });
    let i = oldest.length - 1;
    return oldest[i];

};

// Do not edit below this line
module.exports = findTheOldest;

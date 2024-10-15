
const day = 'saturday';

if (day === 'monday') {
    console.log("Plan course structure");
    console.log("Prepare videos");
}
else if (day === 'tuesday') {
    console.log("prepare theory");
}
else if (day === 'wendesday' || day === 'thursday') {
    console.log("Code examples");
}
else if (day === 'friday') {
    console.log("Record videos");
}
else if (day === 'saturday' || day === 'sunday') {
    console.log("enjoy the weekend");
}
else {
    console.log(" ONLY SHOW IF THE VALUE IS NOT A DAY");
}


var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(`${newPerson}`);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function takeANumber(katzDeliLine, newPerson) {
  var ticketNumber = 0;
  ticketNumber++
  katzDeliLine.push(ticketNumber);
  return `Welcome ${newPerson}. You are ticket number ${ticketNumber} in line.`;
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

console.log(currentLine(katzDeliLine))
console.log(takeANumber(katzDeliLine, "Jason"))
console.log(takeANumber(katzDeliLine, "Catie"))
console.log(currentLine(katzDeliLine))
console.log(nowServing(katzDeliLine))
console.log(currentLine(katzDeliLine))
console.log(nowServing(katzDeliLine))
console.log(nowServing(katzDeliLine))

function currentLine(katzDeliLine) {
   if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var line = []
    for (let i = 0; i < katzDeliLine.length; i++) {
    line.push(` ${i+1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently:${line}`
  }
}
const carMakers: string[] = ["ford", "toyota", "chevy", "tesla"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting vals

const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompt vals
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flex types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-10-1");

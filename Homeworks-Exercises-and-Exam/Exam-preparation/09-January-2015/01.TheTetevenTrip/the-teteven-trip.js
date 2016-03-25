/**
 * Created by PC on 29.01.2016 г..
 */
function solve(arr) {
    "use strict";
    for (var carIndex in arr) {
        var car = arr[carIndex].split(' '),
            fuelType = car[1],
            route = car[2],
            luggageWeight = car[3],
            fuelCoefficient;
        switch (fuelType) {
            case 'gas':
                fuelCoefficient = 1.2;
                break;
            case 'petrol':
                fuelCoefficient = 1;
                break;
            case 'diesel':
                fuelCoefficient = 0.8;
                break;
        }

        var totalFuelConsumption,
            totalDistance,
            snowyRoad;
        switch (route) {
            case '1':
                totalDistance = 110;
                snowyRoad = 10;
                totalFuelConsumption = calculateTotalFuelConsumption(luggageWeight, fuelCoefficient, totalDistance, snowyRoad);
                break;
            case '2':
                totalDistance = 95;
                snowyRoad = 30;
                totalFuelConsumption = calculateTotalFuelConsumption(luggageWeight, fuelCoefficient, totalDistance, snowyRoad);
                break;
        }

        car[car.length - 1] = Math.round(totalFuelConsumption);
        console.log(car.join(' '));
    }

    function calculateTotalFuelConsumption(luggageWeight, fuelCoefficient, totalDistance, snowyRoad) {
        var extraFuelForLuggage = luggageWeight * 0.01;
        var baseFuelConsumption = (10 * fuelCoefficient + extraFuelForLuggage) / 100;
        var extraSnowConsumption = 0.3 * baseFuelConsumption;
        var totalFuelConsumption = (baseFuelConsumption * totalDistance) + (extraSnowConsumption * snowyRoad);

        return totalFuelConsumption;
    }
}

var arr =  [ 'BMW petrol 1 320.5',
    'Golf petrol 2 150.75',
    'Lada gas 1 202',
    'Mercedes diesel 2 312.54' ];

solve(arr);
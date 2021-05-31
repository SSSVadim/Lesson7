class Car {

	#brand;
	#model;
	#yearOfManufacturing;
	#maxSpeed;
	#maxFuelVolume;
	#fuelConsumption;	
	#currentFuelVolume;
	#isStarted;
	#mileage;

	constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption) {
	
		if(!validateString(brand) || brand.length < 1 || brand.length > 50){
			throw new Error ('Model is not valid')
		}

		if(!validateString(model) || model.length < 1 || model.length > 50){
			throw new Error ('Model is not valid')
		}

		if(!validateNumber(yearOfManufacturing) || yearOfManufacturing < 1900 || yearOfManufacturing > new Date().getFullYear()){
			throw new Error ('yearOfManufacturing is not valid')
		}

		if(!validateNumber(maxSpeed) || maxSpeed < 100 || maxSpeed > 300){
			throw new Error ('Max speed is not valid')
		}

		if(!validateNumber(maxFuelVolume) || maxFuelVolume < 5 || maxFuelVolume > 20){
			throw new Error ('Max Fuel Volume is not valid')
		}

		if(!validateNumber(fuelConsumption) || fuelConsumption < 1.2 || fuelConsumption > 3){
			throw new Error ('Max Fuel Volume is not valid')
		}

		
		this.#brand = brand;
		this.#model = model;
		this.#yearOfManufacturing = yearOfManufacturing;
		this.#maxSpeed = maxSpeed;
		this.#maxFuelVolume = maxFuelVolume;
		this.#fuelConsumption = fuelConsumption;		
		this.#currentFuelVolume = 0;
		this.#isStarted = false;
		this.#mileage = 0;
	}
	


	start(){
		if (this.#isStarted) {
			throw new Error ('Машина уже заведена')
		}
		this.#isStarted = true;
	}

	shutDownEngine() {
		if (!this.#isStarted){
			throw new Error ('Машина ещё не заведена')
		}
		this.#isStarted = false;
	}

	fillUpGasTank(value){
		if (!validateNumber || value <= 0 ){
			throw new Error ('Неверное количество топлива для заправки')
		}
		if (value + this.#currentFuelVolume > this.#maxFuelVolume){
			throw new Error ('Топливный бак переполнен')
		}
		this.#currentFuelVolume += value;

	}

	drive(speed, hours){
		if (!this.#isStarted) {
			throw new Error ('Машина должна быть заведена, чтобы ехать')
		}
		if (!validateNumber(speed) || speed <= 0) {
			throw new Error ('Неверная скорость')
		}
		if (speed > this.#maxSpeed ) {
			throw new Error ('Машина не может ехать так быстро')
		}
		if (!validateNumber(hours) || hours <= 0){
			throw new Error ('Неверное количество часов')
		}

		let distance = speed * hours;
		let fuelNeeded = distance/100 * this.#fuelConsumption;
		if (fuelNeeded > this.#currentFuelVolume) {
			throw new Error ('Недостаточно топлива')
		}
		this.#currentFuelVolume -= fuelNeeded;
		this.#mileage += distance
		console.log(`Дистанция ${distance}`);					
		console.log(`Требуется топлива ${fuelNeeded}`);			
	}



	set brand(value) {
		if (!validateString(value) || value.length < 1 || value.length > 50) {
			throw new Error('Brand is not valid')
		}
		this.#brand = value;
	}

	get brand(){
		return this.#brand;
	}

	set model(value) {
		if (!validateString(value) || value.length < 1 || value.length > 50) {
			throw new Error('Model is not valid')
		}
		this.#model = value;
	}

	get model(){
		return this.#model;
	}

	set yearOfManufacturing(value) {
		if (!validateNumber(value) || value < 1900 || value > new Date().getFullYear()) {
			throw new Error('yearOfManufacturing is not valid')
		}

		this.#yearOfManufacturing = value;
	}

	get yearOfManufacturing(){
		return this.#yearOfManufacturing;
	}

	set maxSpeed(value) {
		if(!validateNumber(value) || value < 100 || value > 300){
			throw new Error ('Max speed is not valid')
		}
		this.#maxSpeed = value;
	}

	get maxSpeed(){
		return this.#maxSpeed;
	}

	set maxFuelVolume(value){
		if(!validateNumber(value) || value < 5 || value > 20){
			throw new Error ('Max Fuel Volume is not valid')
		}

		this.#maxFuelVolume = value;
	}

	get maxFuelVolume(){
		return this.#maxFuelVolume;
	}

	set fuelConsumption(value){
		if(!validateNumber(value) || value < 1.2 || value > 3){
			throw new Error ('Max Fuel Volume is not valid')
		}
		this.#fuelConsumption = value;
	}

	get fuelConsumption(){
		return this.#fuelConsumption;
	}

	get currentFuelVolume(){
		return this.#currentFuelVolume;
	}

	get isStarted(){
		return this.#isStarted;
	}

	get mileage(){
		return this.#mileage;
	}
}


function validateNumber(value){
	if (!Number.isFinite(value)) {
		return false
	}
	return true
}

function validateString(value){
	if ( typeof(value) !== 'string' || value === '' ) {
		return false
	}
	return true
}


module.exports = Car;
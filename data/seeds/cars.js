
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
            vin: "S5S5D562132321", 
            make: "Toyota", 
            model: "Corolla", 
            mileage: 85000, 
            tittle: "clean",
            transmission: "automatic"
        },
        {
            vin: "S5S55D5621321", 
            make: "Toyota", 
            model: "Camry", 
            mileage: 55500, 
            tittle: "clean",
            transmission: "automatic"
        },
        {
            vin: "S5S5D5002321", 
            make: "Toyota", 
            model: "Rav4", 
            mileage: 35500, 
            tittle: "salvage",
            transmission: "automatic" 
        },
        {
            vin: "S55D4F230021", 
            make: "Toyota", 
            model: "Highlander", 
            mileage: 115000, 
            tittle: "clean",
            transmission: "automatic"
        },
        {
            vin: "S3S5F55D5619321", 
            make: "Toyota", 
            model: "Avalon", 
            mileage: 85000, 
            tittle: "salvage",
            transmission: "automatic" 
        }
      ]);
    });
};

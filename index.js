const mongoose = require('mongoose');
let StudentModel = require('./models/Students.model');

//Create
//Read
//Update
//Delete

mongoose
  .connect('mongodb://localhost:27017/ironhack') //(ironhack=name of database)
  // mongoose return promise
  .then(() => {
    console.log('Yayyy, my DB got connected!');

    // Deletes everything from the DB
    return StudentModel.deleteMany();
  })
  .then(() => {
    //Creates one items
    return StudentModel.create({ name: 'Manish' });
  })
  .then((data) => {
    // console.log(data)

    let myData = [
      { name: 'Taka', age: 21, country: 'Germany' },
      { name: 'Joanne', age: 22 },
      { name: 'George', age: 23 },
    ];
    //Create many items
    return StudentModel.insertMany(myData);
  })
  .then((manyData) => {
    console.log(manyData);

    //Find/Read
    // StudentModel.findById()
    // StudentModel.findOne()

    return StudentModel.find({ name: 'Taka' }, { age: 1, _id: 0 });
  })
  .then((dataFound) => {
    console.log(dataFound);

    // Update
    // StudentModel.findByIdAndUpdate(id, {})
    // StudentModel.updateMany()
    return StudentModel.updateOne({ name: 'Joanne' }, { country: 'Austria' });
  })
  .then((updatedDoc) => {
    console.log(updatedDoc);

    //Delete
    // StudentModel.findOneAndDelete(id);
    // StudentModel.findByIdAndDelete(id);
    // StudentModel.deleteOne({ name: 'George' });
    StudentModel.deleteMany({ name: 'George' });
  })
  .catch((err) => {
    console.log('DB connection error!', err);
  });

use("CrudDb")

// console.log(db)

// db.createCollection("cources")


// db.cources.insertOne({
//     name: "HAHAHA",
//     price: 5,
//     assignment: 12,
//     projects: 45
// })
// db.cources.insertMany([
//   { "name": "Alpha", "price": 10, "assignment": 3, "projects": 7 },
//   { "name": "Beta", "price": 15, "assignment": 4, "projects": 5 },
//   { "name": "Gamma", "price": 8, "assignment": 2, "projects": 6 },
//   { "name": "Delta", "price": 20, "assignment": 6, "projects": 9 },
//   { "name": "Epsilon", "price": 12, "assignment": 5, "projects": 8 },
//   { "name": "Zeta", "price": 9, "assignment": 1, "projects": 4 },
//   { "name": "Eta", "price": 7, "assignment": 2, "projects": 3 },
//   { "name": "Theta", "price": 14, "assignment": 4, "projects": 6 },
//   { "name": "Iota", "price": 11, "assignment": 3, "projects": 7 },
//   { "name": "Kappa", "price": 16, "assignment": 5, "projects": 10 }
// ]
// )


// let a = db.cources.find({price: 5})
// console.log(a)
// console.log(a.count())
// let b = db.cources.findOne({price: 5})
// console.log(b)

// db.cources.updateOne({price: 5}, {$set:{price: 100}})
// db.cources.updateMany({price: 5}, {$set:{price: 100}})


// db.cources.deleteOne({price: 100})
db.cources.deleteMany({price: 100})
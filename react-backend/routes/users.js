const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
      {pmkDogId: 1, fldName: "Rofus", fldBreed: "French Bull Dog", fldAge: 4, fldDescription: "Awesome Dog", fldPhoto: "Grey_Brindle_French_Bulldog.png"},
      {pmkDogId: 2, fldName: "Greta", fldBreed: "Golden Retriever", fldAge: 3, fldDescription: "Sweet Girl", fldPhoto: "golden_retriever.jpg"}
  ]);
});

module.exports = router;

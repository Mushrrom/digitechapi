const fetch = require('node-fetch');




module.exports = async (req, res) => { 
  try {
    const search = req.query.item
    const KEY=process.env.APIKEY;
    //const search = "apple";
    const r = await (
        await 
          fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${search}&Size=2&api_key=fLLGywDZJksKiBmG0HEUHl1pXEgRXqbIaWdt3IB4`)
      ).json();

    function search_array(array) {
        for (i = 0; i < array.length; i++) {
            if (array[i]["unitName"] === "KCAL") {
                return i
            }
        }
    }


    //
    if (r.foods[0]) {
      a = search_array(r.foods[0].foodNutrients);
      kcal = r.foods[0].foodNutrients[a].value;
      servingsize = r.foods[0].servingSize;
      console.log((kcal/servingsize).toFixed(2));
      res.send(((kcal/servingsize).toFixed(2)))
    } else {
      res.send("UNKNOWN");
    }
  } catch (err) {
    res.send(err) // send the thrown error
  }
}
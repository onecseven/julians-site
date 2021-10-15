const express = require("express")
const app = module.exports = express()
//WAITING Switch to sql (waiting email)


app.get("/appointment/:id/decline", async (request, response) => {
  try {
    const food = await CalendarModel.findByIdAndDelete(request.params.id);
    if (!food)
      response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

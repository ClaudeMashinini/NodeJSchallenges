Building a Representational State Transfer API for capturing the information of visitors/prospective students at Umuzi, using MongoDB, Mongoose Express and other services.

INSTRUCTIONS

1. Ensure all the dependencies, Postman and mongodb are installed.
2. Within the project folder in your terminal, run the command "npm start" or "node app.js".
3. Ensure that the database has collection called "visitors"
4. On Postman type in "localhost:8888/prospect/visitors/addOne" in the request bar to add a visitor's information into
   the database using the Schema that can be found in the models folder. (Request type: POST)
5. Type in "localhost:8888/prospect/visitors/viewAll" to see all the visitors captured in the database. (Request type: GET)
6. Type in "localhost:8888/prospect/visitors/:id" to view a specific visitor captured in the database. ":id" is the database created id. (Request type: GET)
7. Type in "localhost:8888/prospect/visitors/deleteAll" to delete all the visitors captured in the database. (Request type: DELETE)
8. Type in "localhost:8888/prospect/visitors/:id" to delete a specific visitor captured in the database. ":id" is the database created id. (Request type: DELETE)
9. Type in "localhost:8888/prospect/visitors/:id" to edit a specific visitor captured in the database. ":id" is the name of the visitor. (Request type: PUT)

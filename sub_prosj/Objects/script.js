// Function contstructor
 
 var Movies = function (title, yearReleased, rating, myRating) {
 	this.title = title;
 	this.yearReleased = yearReleased;
 	this.rating = rating;
 	this.myRating = myRating;
 }

 Movies.prototype.website = 'www.movies.com';
 Movies.prototype.userRating = function () {
 	return this.rating - this.myRating;
 	/* body... */
 }

 var movie1 = new Movies('the ring', 1996, 8.5, 10)

 var movie2 = new Movies ('game', 1998, 7, 3);
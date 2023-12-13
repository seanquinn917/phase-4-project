# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
cities = ["New York", "Des Moines", "Grand Rapids", "Milford", "Boston", "Hartford", "Dallas", "Seattle", "Albany", "Beacon"]
reviews = ["Best movie ever!", "I thought it was too long", "Can't wait to come back and see it again","I hated the main character", "Can't wait for the sequel", "I aged watching this movie"]

movies = [
  { title: "Lord of the Rings", director: "Peter Jackson", genre: "Fantasy" },
  { title: "Star Wars", director: "George Lucas", genre: "Sci-fi" },
  { title: "The Family Stone", director: "Thomas Bezucha", genre: "Drama" },
  { title: "LadyBird", director: "Greta Gerwig", genre: "Indy" },
  { title: "I, Tonya", director: "Craig Gillespie", genre: "Drama" },
  { title: "Drop Dead Gorgeous", director: "Michael Patrick Jann", genre: "Comedy" },
  { title: "Melancholia", director: "Lars von Trier", genre: "Drama" },
  { title: "Mr and Mrs Smith", director: "Doug Liman", genre: "Action" },
  { title: "A River Runs Through It", director: "Robert Redford", genre: "Drama" },
  { title: "Up Close and Personal", director: "Jon Avnet", genre: "Romance" }
]

movies.each do |movie_data|
  movie = Movie.create(movie_data)
  5.times do 
    user = User.create(
      name: Faker::Name.name,
      age: rand(18..76),
      city: cities.sample
    )
    Review.create(
      content: reviews.sample,
      movie_id: movie.id,
      user_id: user.id
    )
  end
end

puts "✅ Done seeding!"
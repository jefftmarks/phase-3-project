require "faker"

puts "🌱 Seeding spices..."

User.destroy_all

5.times do |i|
	User.create(
		first_name: Faker::Name.first_name,
		last_name: Faker::Name.last_name,
		username: Faker::Internet.username,
		password: Faker::Internet.password(min_length: 8, max_length: 20),
		image_url: Faker::Avatar.image,
		is_active?: false
	)
end

10.times do |i|
	Menu.create(
		name: ["Halloween", "Christmas", "Birthday", "Thahksgiving"].sample + " " + ["Breakfast", "Lunch", "Dinner"].sample,
		image_url: "https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg",
		description: Faker::Lorem.sentence(word_count: 10),
		date: Faker::Date.in_date_period,
		user_id: User.all.sample.id
	)
end

20.times do |i|
	Course.create(
		category: ["Appetizer", "Entree", "Main", "Side", "Dessert"].sample,
		menu_id: Menu.all.sample.id,
	)
end

20.times do |i|
	Dish.create(
		name: Faker::Food.dish,
		description: Faker::Food.ethnic_category,
		course_id: Course.all.sample.id,
	)
end

40.times do |i|
	Ingredient.create(
		description: "#{Faker::Food.ingredient}, #{Faker::Food.measurement}",
		dish_id: Dish.all.sample.id
	)
end

puts "✅ Done seeding!"

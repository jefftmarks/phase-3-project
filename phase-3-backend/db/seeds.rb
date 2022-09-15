require "faker"

puts "🌱 Seeding spices..."

User.destroy_all
Menu.destroy_all
Course.destroy_all
Like.destroy_all

5.times do |i|
	User.create(
		first_name: Faker::Name.first_name,
		last_name: Faker::Name.last_name,
		username: Faker::Internet.username,
		password: Faker::Internet.password(min_length: 8, max_length: 20),
		image_url: Faker::Avatar.image,
		email: Faker::Internet.safe_email,
		is_active: false
	)
end

food_pics = [
	"https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg",
	"https://bakingamoment.com/wp-content/uploads/2020/06/IMG_8813-bagel-recipe.jpg",
	"https://images.immediate.co.uk/production/volatile/sites/30/2021/04/kids-birthday-cf275c3.jpg",
	"https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg",
	"https://cdn.hourdetroit.com/wp-content/uploads/sites/20/2018/11/iStock-836012728-c94f46f4.jpg",
	"https://assets.bonappetit.com/photos/5a5fe8539af01310221d526b/5:7/w_2238,h_3134,c_limit/50-dollar-dinner-party-oranges-chocolate-dessert.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfVt-O9ObQqgyH3p9mi_HpepDcyMEafX03mA&usqp=CAU",
	"https://cdn.vox-cdn.com/thumbor/BOjkSSj52l0dmRK_zjoz_ORgW7g=/0x0:1728x2160/1200x900/filters:focal(726x942:1002x1218)/cdn.vox-cdn.com/uploads/chorus_image/image/59365469/af_fatg_2.22_7.66.jpeg"
]

10.times do |i|
	Menu.create(
		name: ["Halloween", "Christmas", "Birthday", "Thanksgiving", "Family", "Harry Potter Themed"].sample + " " + ["Breakfast", "Lunch", "Dinner", "Brunch", "Snack", "Feast", "BBQ"].sample,
		image_url: food_pics.sample,
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

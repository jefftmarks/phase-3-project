require "faker"

puts "🌱 Seeding spices..."

User.destroy_all
Menu.destroy_all
Course.destroy_all
Like.destroy_all


food_pics = [
	"https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg",
	"https://bakingamoment.com/wp-content/uploads/2020/06/IMG_8813-bagel-recipe.jpg",
	"https://images.immediate.co.uk/production/volatile/sites/30/2021/04/kids-birthday-cf275c3.jpg",
	"https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg",
	"https://cdn.hourdetroit.com/wp-content/uploads/sites/20/2018/11/iStock-836012728-c94f46f4.jpg",
	"https://assets.bonappetit.com/photos/5a5fe8539af01310221d526b/5:7/w_2238,h_3134,c_limit/50-dollar-dinner-party-oranges-chocolate-dessert.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfVt-O9ObQqgyH3p9mi_HpepDcyMEafX03mA&usqp=CAU",
	"https://cdn.vox-cdn.com/thumbor/BOjkSSj52l0dmRK_zjoz_ORgW7g=/0x0:1728x2160/1200x900/filters:focal(726x942:1002x1218)/cdn.vox-cdn.com/uploads/chorus_image/image/59365469/af_fatg_2.22_7.66.jpeg",
	"https://frogprincepaperie.com/wp-content/uploads/2019/09/Taco-Party-Ideas-3.jpg",
	"https://www.travelingvineyard.com/wp-content/uploads/2019/09/Blog_TopTastingThemes_12.jpg",
	"https://www.mashed.com/img/gallery/11-best-things-to-bring-on-a-picnic/l-intro-1655290703.jpg",
	"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png",
	"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/11/20/DV3101_Pumpkin-Bread-French-Toast_s4x3.jpg.rend.hgtvcom.616.462.suffix/1574279236974.jpeg",
	"https://i.ytimg.com/vi/BfgGVZa8IBU/maxresdefault.jpg",
	"https://media.istockphoto.com/photos/buffet-table-with-sweets-and-drinks-cooked-and-decorated-in-honor-of-picture-id1056773758?k=20&m=1056773758&s=612x612&w=0&h=IiMJNziirsuYZ1AWxwBilWTBitcImF9dhm49MmlgAeY="
]

events = ["Halloween", "Christmas", "Birthday", "Wallet Friendly", "Bougie", "Thanksgiving", "Family", "#{Faker::Movie.title}-Themed", "Easter", "Corporate", "Super Special", "Quick and Easy" "#{Faker::Commerce.vendor}-Sponsored", "Valentine's Day", "#{Faker::Address.state}"]

event_types = ["Breakfast", "Charcuterie Board", "Lunch", "Dinner", "Wine Tasting", "Hot Dog Eating Contest", "Buffet", "Potluck", "Brunch", "Snack", "Feast", "BBQ", "Party", "Picnic"]


10.times do |i|

	user = User.create(
		first_name: Faker::Name.first_name,
		last_name: Faker::Name.last_name,
		username: Faker::Internet.username,
		password: Faker::Internet.password(min_length: 8, max_length: 20),
		image_url: Faker::Avatar.image,
		email: Faker::Internet.safe_email,
		is_active: false
	)

	rand(6..10).times do |i|

		courses = []

		rand(1..3).times do |i|

			dishes = []

			rand(1..3).times do |i|
				dishes << Dish.create(
					name: Faker::Food.dish,
					description: Faker::Lorem.sentence(word_count: 5),
					ingredients: "#{Faker::Food.ingredient}, #{Faker::Food.measurement}"
				)
			end

			course = Course.create(
				category: ["Appetizer", "Starter", "Entree", "Main", "Side", "Dessert"].sample,
				dishes: dishes
			)

			courses << course

		end

		Menu.create(
			name: events.sample + " " + event_types.sample,
			image_url: food_pics.sample,
			description: Faker::Lorem.sentence(word_count: 10),
			date: Faker::Date.backward(days: 365),
			user: user,
			courses: courses
		)

	end

end

20.times do |i|
	menu_maker = User.all.sample

	menu = menu_maker.menus.sample

	user = User.all.filter {|user| user.id != menu_maker.id }.sample

	Like.create(
		liked_menu: menu,
		liker: user
	)
end


puts "✅ Done seeding!"

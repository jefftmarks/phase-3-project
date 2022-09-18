require "pry"

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get "/users" do
    users = User.all
    users.to_json(include: [:menus, :liked_menus]) 
  end

	# See if a user is already logged on, otherwise return empty array
	get "/find_active_user" do
		active_user = User.find_by(is_active: true)
		active_user.to_json(include: :menus)
	end

	get "/find_by_username/:username" do
		user = User.find_by(username: params[:username])
		user.to_json(include: [:menus, :liked_menus])
	end

  get "/users/:id" do
    user = User.find(params[:id])
    user.to_json(include: :menus)
  end
  
	patch "/users/:id" do
		user = User.find(params[:id])
		user.update(
			first_name: params[:first_name],
			last_name: params[:last_name],
			username: params[:username],
			email: params[:email],
			password: params[:password],
			image_url: params[:image_url],
			is_active: params[:is_active]
		)
		user.to_json
	end

	post "/users" do
		user = User.create(
			first_name: params[:first_name],
			last_name: params[:last_name],
			username: params[:username],
			email: params[:email],
			password: params[:password],
			image_url: params[:image_url],
			is_active: true
		)
		user.to_json
	end

	post "/create_menu/:user_id" do

		menu = Menu.create(
			name: params[:name],
			image_url: params[:image_url],
			description: params[:description],
			date: params[:date],
		)

		courses = []

		params[:courses].map do |course_el|
			course = Course.create(
				category:  course_el[:category],
			)
			courses << course
		end

		menu.update(courses: courses)

		params[:courses].each_with_index do |course_el, index|
			course_el[:dishes].each do |dish_el|
				Dish.create(
					name: dish_el[:name],
					description: dish_el[:description],
					ingredients: dish_el[:ingredients],
					course: courses[index]
				)
			end

		end

		user = User.find(params[:user_id])

		user.menus << menu

		menu.to_json(include: {courses: {include: :dishes}})
	end

	get "/menus" do
		menus = Menu.all
		menus.to_json(include: {courses: {include: :dishes}})
	end

	get "/menus/:id" do
		menu = Menu.find(params[:id])
		menu.to_json(include: [:user, :likes, {courses: {include: :dishes}}])
	end

	delete "/menus/:id" do
		menu = Menu.find(params[:id])
		menu.destroy
		menu.to_json
	end

	get "/recent_menus/:count" do
		menus = Menu.all.order(created_at: :desc)

		start = params[:count].to_i
		finish = params[:count].to_i + 19

		feed = menus[start..finish]
		
		feed.to_json(include: :user)
	end

	get "/likes" do
		likes = Like.all
		likes.to_json()
	end

	post "/likes" do
		like = Like.create(user_id: params[:user_id], menu_id: params[:menu_id])
		like.to_json
	end

	delete "/likes/:id" do
		like = Like.find(params[:id])
		like.destroy
		like.to_json
	end

end


require "pry"

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get "/users" do
    users = User.all
    users.to_json
  end

	# See if a user is already logged on, otherwise return empty array
	get "/find_active_user" do
		active_user = User.find_by(is_active: true)
		active_user.to_json
	end

	get "/find_by_username/:username" do
		user = User.find_by(username: params[:username])
		user.to_json
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
			password: params[:password],
			image_url: params[:image_url],
			is_active: true
		)
		user.to_json
	end

	post "/create_menu/:user_id" do

		binding.pry

		menu = Menu.create(
			name: params[:name],
			image_url: params[:image_url],
			description: params[:description],
			date: params[:date],
			user_id: params[:user_id],
		)

		params[:courses].each do |course_el|
			
			course = Course.create(
				category:  course_el[:category],
				menu: menu
			)

			course_el.each do |dish_el|

				Dish.create(
					name: dish_el[:name],
					description: dish_el[:description],
					ingredients: dish_el[:ingredients],
					course: course
				)

			end

		end

		menu.to_json

	end

end

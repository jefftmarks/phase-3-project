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

	get "/validate/:username" do
		user = User.find_by(username: params[:username])
		user.to_json
	end

  get "/users/:id" do
    user = User.find(params[:id])
    user.to_json(include: :menus)
  end

	patch "/set_active_user/:id" do
		user = User.find(params[:id])
		user.update(is_active: params[:is_active])
		user.to_json
	end

end

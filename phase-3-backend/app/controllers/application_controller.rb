class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get "/users" do
    users = User.all
    users.to_json
  end

	# See if a user is already logged on, otherwise return empty array
	get "/users/find_active" do
		active_user = User.find_by(is_active: true)
		if active_user
			active_user.to_json
		else
			[].to_json
		end
	end

	# get "/users/:username" do
		
	# end

  get "/users/:id" do
    user = User.find(params[:id])
    user.to_json(include: :menus)
  end

end

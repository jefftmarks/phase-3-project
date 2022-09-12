class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/users" do
    users = User.all
    users.to_json
  end

	get "/find_active_user" do
		active_user = User.find_by(is_active: true)
		if active_user
			active_user.to_json
		else
			[].to_json
		end
	end

  get "/users/:id" do
    user = User.find(params[:id])
    user.to_json(include: :menus)
  end

end

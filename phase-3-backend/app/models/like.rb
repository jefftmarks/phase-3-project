class Like < ActiveRecord::Base
	belongs_to :liker, :class_name => "User", :foreign_key => "user_id"
	belongs_to :liked_menu, :class_name => "Menu", :foreign_key => "menu_id"
	
end
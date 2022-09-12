class User < ActiveRecord::Base
	has_many :menus
	has_many :likes
	has_many :liked_menus, through: :likes
end
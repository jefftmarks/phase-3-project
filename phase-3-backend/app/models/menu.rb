class Menu < ActiveRecord::Base
	belongs_to :user
	has_many :courses
	has_many :likes
	has_many :likers, through: :likes
end
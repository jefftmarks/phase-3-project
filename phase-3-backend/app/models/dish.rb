class Dish < ActiveRecord::Base
	belongs_to :course
	has_many :ingredients
end
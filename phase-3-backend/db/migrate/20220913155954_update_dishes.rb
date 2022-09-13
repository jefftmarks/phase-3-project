class UpdateDishes < ActiveRecord::Migration[6.1]
  def change
		add_column :dishes, :ingredients, :string
  end
end

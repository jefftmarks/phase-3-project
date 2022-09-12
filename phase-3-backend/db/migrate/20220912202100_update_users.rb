class UpdateUsers < ActiveRecord::Migration[6.1]
  def change
		rename_column :users, :is_active?, :is_active
  end
end

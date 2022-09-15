class UpdateTypeDateInMenus < ActiveRecord::Migration[6.1]
  def change
		change_column :menus, :date, :string
  end
end

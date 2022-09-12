class CreateMenus < ActiveRecord::Migration[6.1]
  def change
    create_table :menus do |t|
      t.string :name
      t.string :image_url
      t.string :description
      t.datetime :date
      t.integer :user_id
      t.timestamps
    end
  end
end

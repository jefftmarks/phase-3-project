class UpdateCourses < ActiveRecord::Migration[6.1]
  def change
    rename_column :courses, :type, :category
  end
end

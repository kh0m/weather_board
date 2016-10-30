class AddUserToCities < ActiveRecord::Migration[5.0]
  def change
    add_reference :cities, :user, foreign_key: true
  end
end

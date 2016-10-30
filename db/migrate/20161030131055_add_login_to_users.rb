class AddLoginToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :login, :string
    add_index :users, :login, unique: true

    add_column :users, :crypted_password, :string
    add_column :users, :password_salt, :string
    add_column :users, :persistence_token, :string
  end
end

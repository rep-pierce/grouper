class CreateUsersGroups < ActiveRecord::Migration[7.0]
  def change
    create_table :users_groups do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :group, null: false, foreign_key: true

      t.timestamps
    end
  end
end

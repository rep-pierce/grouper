class Group < ApplicationRecord
  belongs_to :user
  has_many :users_groups, dependent: :destroy
  has_many :users, through: :users_groups, dependent: :destroy
  has_many :posts, dependent: :destroy
  has_many :users, through: :posts, dependent: :destroy

end

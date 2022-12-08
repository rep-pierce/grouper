class Group < ApplicationRecord
  belongs_to :user
  has_many :usersgroups
  has_many :users, through: :usersgroups
  has_many :posts
  has_many :users, through: :posts

end

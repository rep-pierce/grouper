class Group < ApplicationRecord
  belongs_to :user
  has_many :usersgroups, dependent: :destroy
  has_many :users, through: :usersgroups, dependent: :destroy
  has_many :posts, dependent: :destroy
  has_many :users, through: :posts, dependent: :destroy

end

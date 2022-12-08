class User < ApplicationRecord
    has_many :groups
    has_many :usersgroups
    has_many :groups, through: :usersgroups
    has_many :posts
    has_many :groups, through: :posts
end

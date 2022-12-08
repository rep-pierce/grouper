class User < ApplicationRecord
    has_many :groups, dependent: :destroy
    has_many :usersgroups, dependent: :destroy
    has_many :groups, through: :usersgroups, dependent: :destroy
    has_many :posts, dependent: :destroy
    has_many :groups, through: :posts, dependent: :destroy
end

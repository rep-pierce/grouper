class User < ApplicationRecord
    has_many :groups, dependent: :destroy
    has_many :users_groups, dependent: :destroy
    has_many :groups, through: :users_groups
    has_many :posts, dependent: :destroy
    has_many :groups, through: :posts

    has_secure_password
end

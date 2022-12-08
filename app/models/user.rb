class User < ApplicationRecord
    has_many :groups, dependent: :destroy
    has_many :users_groups, dependent: :destroy
    has_many :groups, through: :users_groups, dependent: :destroy
    has_many :posts, dependent: :destroy
    has_many :groups, through: :posts, dependent: :destroy
end

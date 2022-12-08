class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :content
  has_one :user
  has_one :group
end

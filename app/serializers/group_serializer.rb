class GroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :group_count
  has_one :user
  has_many :posts

  def group_count
    self.object.users_groups.length
  end

end

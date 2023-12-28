class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :age, :username
  has_many :reviews
end

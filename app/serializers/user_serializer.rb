class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :age, :username, :reviews
end

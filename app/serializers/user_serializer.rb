class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :age, :reviews
end

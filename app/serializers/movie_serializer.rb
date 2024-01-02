class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :director, :genre, :users
  has_many :reviews
end

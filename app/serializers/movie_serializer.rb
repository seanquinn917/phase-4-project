class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :director, :genre, :reviews
  has_many :reviews
end

class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :director, :genre, :reviews
end

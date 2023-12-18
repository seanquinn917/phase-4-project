class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :director, :genre, :reviews, :users
 
end

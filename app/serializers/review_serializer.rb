class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :movie_id
end

class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content,:username, :usercity, :user_id, :movie_id, :user


  def username
    object.user.username
  end

  def usercity
    object.user.city
  end
end

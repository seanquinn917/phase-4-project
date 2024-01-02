class Review < ApplicationRecord
    validates :content, presence:true
    validates :content, length: {minimum: 3}
    validates :movie_id, presence:true
    validates :user_id, presence:true
    belongs_to :user
    belongs_to :movie
end

class Review < ApplicationRecord
    validates :content, presence:true
    validates :movie_id, presence:true
    validates :user_id, presence:true
    belongs_to :user
    belongs_to :movie
end

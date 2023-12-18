class Review < ApplicationRecord
    validates :name, presence:true
    validates :city, presence:true
    validates :content, presence:true
    belongs_to :user
    belongs_to :movie
end

class Movie < ApplicationRecord
    validates :title, presence:true
    validates :director, presence:true
    validates :genre, presence:true
 has_many :reviews
 has_many :users, through: :reviews
end

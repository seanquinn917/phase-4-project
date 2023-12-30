class User < ApplicationRecord
    has_secure_password
    has_many :reviews, dependent: :destroy
    has_many :movies, through: :reviews
    validates :username, presence: true
    validates :password, presence: true
        # Other validations...
    
end

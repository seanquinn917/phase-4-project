class User < ApplicationRecord
    # validates :username, presence: true
    # validates :username, uniqueness: true
    
    has_secure_password

    has_many :reviews, dependent: :destroy
    has_many :movies, through: :reviews

        
    
end

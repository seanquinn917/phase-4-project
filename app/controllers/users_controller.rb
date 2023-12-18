class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, include: :reviews
    end 

    def create
        user = User.create(user_params)
        render json: user 
    end





    private

    def user_params
        params.permit(:id, :name, :age, :city, :password, :review)
    end
end

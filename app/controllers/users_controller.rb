class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, include: :reviews
    end 

    def show
            user=User.find_by(id:session[:id])
            if user
                render json: user
            else 
               render json: {error: "Not Authorized"}, status: :unauthorized
            
        end
    end

    def create
       user=User.create!(user_params)
       render json: user, status: :created
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end





    private

    def user_params
        params.permit(:id, :name, :age, :city, :password, :review)
    end
end

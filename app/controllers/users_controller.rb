class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, include: :reviews
    end 

    def show
            user=User.find_by(id:params[:id])
            if user
                render json: user
            else 
               render json: {error: "Not Authorized"}, status: :unauthorized
        end
    end

    def create
       user=User.create(user_params)
       if user_params[:password] != user_params[:password_confirmation]
        render json: {errors: "Password does not match"}, status: :unprocessable_entity
       elsif user.save
        [sesssion[user_id]=user.id]
        render json: user, status: :created
       else
        render json: {errors: user.errors.full_messgages}, status: :unprocessable_entity
       end
    end



  





    private

    def user_params
        params.permit(:id, :name, :age, :city, :password, :review)
    end
end

class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, include: :reviews
    end 

    def show
        if session[:user_id].present?   
        user=User.find_by(id: session[:user_id])
                render json: {
                    id:user.id,
                    name:user.name,
                    username:user.username,
                    age:user.age,
                    city:user.city
                }, status: :created
            else 
               render json: {error: "Unauthorized"}, status: :unauthorized
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
        params.permit(:id, :name, :age, :city, :password, :username, :review,:password, :password_confirmation)
    end
end

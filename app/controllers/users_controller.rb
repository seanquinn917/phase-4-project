class UsersController < ApplicationController
    skip_before_action :authorized, only: [:index, :create]

    def index
        users = User.all
        render json: users, include: :reviews
    end 

    def show
     
        if session[:user_id]
         
          user = User.find_by(id: session[:user_id])
          render json: user, status: :ok
          puts session[:user_id]
       
        else
          render json: { error: "User not found" }, status: :not_found
        end
      end

    def create
       user=User.create(user_params)
       if user_params[:password] != user_params[:password_confirmation]
        render json: {errors: "Password does not match"}, status: :unprocessable_entity
       elsif user.save
        session[:user_id]=user.id
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

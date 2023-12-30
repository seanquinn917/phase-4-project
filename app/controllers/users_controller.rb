class UsersController < ApplicationController
    skip_before_action :authorized, only: [:index, :create, :destroy]

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
      byebug
      #  puts{"password" user_params[:password] }
      #   render json: {errors: "Password does not match"}, status: :unprocessable_entity
      # elsif 
      if user.valid?
        puts "New User:", user.inspect
        session[:user_id]=user.id
        render json: user, status: :created
       else
        render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
       end
    end

    def destroy
      user=User.find_by(id:params[:id])
      user.destroy
      head :no_content
    end

  





    private

    def user_params
      params.require(:user).permit(:id, :name, :age, :city, :username, :password, :password_confirmation)
    end
end

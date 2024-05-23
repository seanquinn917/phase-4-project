class UsersController < ApplicationController
    skip_before_action :authorized, only: [:index, :show, :create, :destroy, :users_review]

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
        if user.save
          session[:user_id] = user.id
          render json: user, status: :created
        else 
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end
      
  
    def destroy
      user=User.find_by(id:params[:id])
      user.destroy
      head :no_content
    end

  
    def users_review
      number = params[:n].to_i
      user = User.all.select{|u| u.reviews.count >= number}
      render json: user 
    end



    private

    def user_params
      params.permit( :name, :age, :city, :password, :password_confirmation, :username)
    end
end

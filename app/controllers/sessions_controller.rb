class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
    if user&.authenicate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
    else 
        render json: {error: "Invalid username or password"}, status: :unprocessable_entity
    end
end 




end

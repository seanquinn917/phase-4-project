class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])

    if user && user.authenticate(params[:password])
        session[:user_id] = user.id
        render json: {
            id: user.id,
            username:user.username,
            name: user.name,
            age: user.age,
            city: user.city
        }, status: :ok
    else 
        render json: {error: ["Invalid username or password"]}, status: :unprocessable_entity
    end
end 




end

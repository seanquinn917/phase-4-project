class SessionsController < ApplicationController
skip_before_action :authorized, only: :create
    
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


def destroy
    user=User.find_by(id: session[:user_id])
    if user
        session.delete :user_id
        head :no_content
    else
        render json: {errors: ["Unauthorized"]}, status: :unauthorized
    end
end



end

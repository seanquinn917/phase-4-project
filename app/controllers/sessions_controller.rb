class SessionsController < ApplicationController
skip_before_action :authorized, only: :create
    
def create
    
    user = User.find_by(username: params[:username])
   
    if user && user.authenticate(params[:password])
        session[:user_id] = user.id
       
        render json: user, status: :ok
        puts session[:user_id] 
      
    else 
        render json: {error: ["Invalid username or password"]}, status: :unauthorized
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

def get_current_user
    if session[:user_id]
      user = User.find_by(id: session[:user_id])
      render json: user, status: :ok
    else
      render json: { error: "No user logged in" }, status: :unauthorized
    end
  end


  
  private

  def session_params
    params.require(:session).permit(:username, :password)
  end

end

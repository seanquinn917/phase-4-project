class MoviesController < ApplicationController


    def index
        if session[:user_id]
        movie = Movie.all
        if movie.any?
        render json: movie, include: :reviews
        else 
            render json: {errors: ["Unauthorized"]}, status: :Unauthorized
        end
    else 
        rend json: {errors: ["Unauthorized"]}, status: :unauthorized
    end
    end

    def show
        movie = Movie.find_by(id:params[:id])
        if !movie
            render json: {errors: "movie not found"}, status: :not_found
        else
            render json: movie, include: :reviews, status: :ok
        end
    end

    def create 
        movie= Movie.create!(movie_params)
        render json: movie
    end

    def destroy
        movie=Movie.find_by(id:params[:id])
        movie.destroy
        head :no_content
    end



    private

    def movie_params
        params.permit(:id, :title, :director, :genre)
    end
end

class MoviesController < ApplicationController
    skip_before_action :authorized, only: [:index, :destroy]

    def index
        movies = Movie.all
        render json: movies
    end

    def show
        movie= Movie.find_by(id:params[:id])
        render json: movie, status: :ok
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
    params.permit(:title, :director,:genre)
end

end

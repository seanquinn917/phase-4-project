class MoviesController < ApplicationController


    def index
        movie = Movie.all
        render json: movie, include: :reviews
    end

    def show 
        movie = Movie.find_by(id: params[:id])
        if !movie
            render json: {errors: "movie not found"}, status: :not_found
        else 
            render json: movie, status: :ok
        end
    end

    def create 
        movie= Movie.create!(movie_params)
        render json: movie
    end



    private

    def movie_params
        params.permit(:title, :director, :genre)
    end
end

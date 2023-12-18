class MoviesController < ApplicationController


    def index
        movie = Movie.all
        render json: movie, include: :reviews
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

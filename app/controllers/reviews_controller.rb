class ReviewsController < ApplicationController


    def index
        reviews = Review.all
        render json: reviews, include: :users
    end 

    def show
        review=Review.find_by(id:params[:id])
        render json: review, include: :user
    end

    def create
        review=Review.create(review_params)
        render json:review
    end

    def destroy
        review=Review.find_by(id:params[:id])
        review.destroy
        head :no_content
    end

    def update 

    end


    private

    def review_params
        params.permit( :movie, :content, :movie_id, :name, :city, :review)
    end

end

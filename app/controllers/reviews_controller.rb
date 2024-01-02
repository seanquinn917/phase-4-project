class ReviewsController < ApplicationController

    # skip_before_action :authorized, only: [:index, :show]

    def index
        reviews = Review.all
        render json: reviews, include: :users
    end 

    def show
        review=Review.find_by(id:params[:id])
        render json: review
    end

    def create
        review=Review.create!(review_params)
        if review
        render json:review
        else 
        render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        review=Review.find_by(id:params[:id])
        review.destroy
        head :no_content
    end

    def update 
        
        review=Review.find_by(id:params[:id])
        if review
            review.update(review_params)
            render json: review, status: :accepted
        else 
            render json: {errors: "review not found"}, status: :not_found
        end
    end



    private

    def review_params
        params.require(:review).permit(:id, :content, :movie_id, :user_id)
    end

end

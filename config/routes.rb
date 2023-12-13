Rails.application.routes.draw do
  
  resources :movies

  get "/movies", to: "movies#index"

  resources :reviews

  get"/reviews", to: "reviews#index"
  resources :users

  post "/login", to: "users#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end

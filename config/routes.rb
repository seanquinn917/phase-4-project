Rails.application.routes.draw do
  
  resources :movies

  get "/movies", to: "movies#index"
  get "/movies/:id", to: "movies#show"
  post '/movies', to: "movies#create"
  delete '/movies/:id',to: 'movies#destroy'

  resources :reviews

  get"/reviews", to: "reviews#index"
  post "/reviews",to: "reviews#create"
  
  resources :users
  
  post "/login", to: "sessions#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end

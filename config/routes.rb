Rails.application.routes.draw do
  
  resources :movies

  get "/movies", to: "movies#index"
  get "/movies/:id", to: "movies#show"
  post '/movies', to: "movies#create"
  delete '/movies/:id', to: 'movies#destroy'

  resources :reviews

  get"/reviews", to: "reviews#index"
  post "/reviews",to: "reviews#create"
  
  resources :users
  get"/me", to:"users#show"
  get"/users", to: "users#index"
  post'/users', to:"users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to:"sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end

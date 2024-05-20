Rails.application.routes.draw do
  
  resources :movies, only: [:index, :show, :create, :destroy]

  get "/movies", to: "movies#index"
  get "/movies/:id", to: "movies#show"
  post '/movies', to: "movies#create"
  delete '/movies/:id', to: 'movies#destroy'

  resources :reviews

  get"/reviews", to: "reviews#index"
  get"/reviews", to: "reviews#show"
  post "/reviews",to: "reviews#create"
  delete "/reviews/:id", to: "reviews#destroy"
  patch "/reviews/:id", to: "reviews#update"
  
  resources :users, only: [:index, :show, :create, :destroy]

  get "/user_reviews/:n", to: "users#users_review"
  get"/users", to: "users#index"
  get "/users/:id", to: "users#show"
  post'/signup', to:"users#create"
  get "/me", to: "users#show"
  delete "/users/:id", to: "users#destroy"
  

  
  get '/current_user', to: 'sessions#get_current_user'
  post "/login", to: "sessions#create"
  delete "/logout", to:"sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end

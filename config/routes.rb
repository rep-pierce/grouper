Rails.application.routes.draw do
  resources :posts, only: [:index]
  resources :users_groups, only: [:index]
  resources :groups, only: [:index, :show]
  resources :users, only: [:index, :show, :create]
  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

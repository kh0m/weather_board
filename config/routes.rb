Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # home page
  get 'home/index'
  root 'home#index'

  # routes for city details and favorites
  get 'cities/index'
  get 'cities/show'
  post 'cities/create', to: 'cities#create'
  post 'cities/destroy', to: 'cities#destroy'

  # enpoint for getting weather data from forecast.io
  post 'weather', to: 'application#weather'

  # routes for user signup and login
  resources :users, only: [:new, :create]
  resources :user_sessions, only: [:create]

  get 'login', to: 'user_sessions#new'
  delete 'logout', to: 'user_sessions#destroy'
end

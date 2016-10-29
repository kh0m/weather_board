Rails.application.routes.draw do
  get 'cities/index'

  get 'cities/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'home/index'
  root 'home#index'

  post '/weather', to: 'application#weather'
end

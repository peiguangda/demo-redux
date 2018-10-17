Rails.application.routes.draw do
  devise_for :user, only: []

  namespace :v1, defaults: { format: :json } do
    resource :login, only: [:create], controller: :sessions
    # resource :logout, only: [:destroy], controller: :sessions
    resource :users, only: [:index, :create]
    resource :search, only: [:create], controller: :searchs
   	post '/searchs/', to: 'searchs#suggest' 
   	post '/getUser/', to: 'authentications#create' 
   	resources :historys
  end
end

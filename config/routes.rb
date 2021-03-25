require 'sidekiq/web'
Rails.application.routes.draw do
  mount Sidekiq::Web => "/sidekiq"
  namespace :api do
    namespace :v1 do
      resources :emails, only: [:create, :index]
      post "users/login", to: "users#login"
      post "users/check", to: "users#google_login"
      resources :users, only: [:create, :index, :update]
      resources :uploads, only: [:create, :index]
    end
  end
  root "home#index"
  get "/*path" => "home#index"
end

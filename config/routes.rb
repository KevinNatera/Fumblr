Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, except: [:destroy]
    resources :posts
    resource :session, only: [:create, :destroy]
  end
  post '/presigned_url', to: 'direct_upload#create'
  root to: 'static_pages#root'
end

Rails.application.routes.draw do
  root 'links#index'

  get '/signup' => 'users#new'
  post '/signup' => 'users#create'

  delete '/logout' => 'sessions#destroy'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'

  resources :links

  get '/mark/:id' => 'links#mark'
end

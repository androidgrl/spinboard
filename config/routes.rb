Rails.application.routes.draw do
  root 'links#index'

  get '/signup' => 'registrations#new'
  post '/signup' => 'registrations#create'

  delete '/logout' => 'sessions#destroy'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
end

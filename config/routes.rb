Rails.application.routes.draw do
  root 'welcome#index'

  get '/signup' => 'users#new'
  post '/signup' => 'users#create'

  delete '/logout' => 'sessions#destroy'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'

  resources :links

  get '/mark/:id' => 'links#mark'
  get '/unmark/:id' => 'links#unmark'
end

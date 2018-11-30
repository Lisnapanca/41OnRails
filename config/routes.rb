Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :home, only: [:index]
  resources :services, only: [:index]
  resources :portofolio, only: [:index]
  resources :job, only: [:index]
  resources :about, only: [:index]
  resources :contact, only: [:index]
  resources :maps, only: [:index]
  resources :article, only: [:index]
end

Rails.application.routes.draw do
  get 'landings/show'
	root 'landings#show'
end

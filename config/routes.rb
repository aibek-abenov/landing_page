Rails.application.routes.draw do
  get 'product/index'
	root 'product#index'
end

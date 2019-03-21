require "net/http"

class ProductController < ApplicationController

  def index
    @products = JSON.parse(get_response_body)
  end

  private

  def get_response_body
    url = URI.parse('http://localhost:3000/api/products/index')
    request = Net::HTTP::Get.new(url.to_s)
    response = Net::HTTP.start(url.host, url.port) { |http|
      http.request(request)
    }

    response.body
  end
end

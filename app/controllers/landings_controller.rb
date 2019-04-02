require "net/http"

class LandingsController < ApplicationController

  def show
    create_products_by_response_body

    @products = Product.all
  end

  private

  def get_response_body
    url = URI.parse('http://ar-1-2-esdp-1.ltestl.com/api/v1/landings/show?landing_id=1')
    request = Net::HTTP::Get.new(url.to_s)
    response = Net::HTTP.start(url.host, url.port) { |http|
      http.request(request)
    }

    response.body
  end

  def create_products_by_response_body
    products = JSON.parse(get_response_body)

    Product.all.destroy_all

    products.each do |product|
      Product.create!(
        id: product["id"],
        name: product["name"],
        description: product["description"],
        price: product["price"]
      )
      rescue ActiveRecord::RecordNotUnique
    end
  end
end

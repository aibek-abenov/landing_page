require "net/http"

class LandingsController < ApplicationController

  def show
    @products = JSON.parse(get_response_body)
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
end

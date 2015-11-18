class LinksController < ApplicationController
  respond_to :json

  def index

  end

  def create
    link = Link.new(link_params)
    if link.save
      render json: {title: link.title, url: link.url, read: link.read, id: link.id}
    else
      render json: {error: "Invalid URL"}
      #render.json { render json: link.errors, status: :unprocessable_entity }
      #flash[:error] = "Invalid URL"
      #puts "error"
      #redirect_to root_path
    end
  end

  private

  def link_params
    params.require(:link).permit(:title, :url)
  end
end

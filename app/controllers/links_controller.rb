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
    end
  end

  def mark
    @link = Link.find(params[:id])
    @link.read = true
    respond_with @link
    #render json: {title: link.title, url: link.url, read: link.read, id: link.id}
  end

  private

  def link_params
    params.require(:link).permit(:title, :url)
  end
end

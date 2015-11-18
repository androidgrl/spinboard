class LinksController < ApplicationController
  respond_to :json

  def index

  end

  def create
    link = Link.create(link_params)
    render json: {title: link.title, url: link.url, read: link.read, id: link.id}
  end

  private

  def link_params
    params.require(:link).permit(:title, :url)
  end
end

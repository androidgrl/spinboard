class LinksController < ApplicationController
  respond_to :json

  def index

  end

  def create
    link = Link.new(link_params)
    render json: {title: link.title, body: link.body, read: link.read, id: link.id}
  end

  private

  def link_params
    params.require(:link).permit(:title, :url)
  end
end

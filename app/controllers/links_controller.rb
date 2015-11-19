class LinksController < ApplicationController
  respond_to :json

  def index
    @links = Link.all
    respond_with @links
  end

  def create
    link = Link.new(link_params)
    if link.save
      render json: {title: link.title, url: link.url, read: link.read, id: link.id}
    else
      render json: {error: "Invalid URL"}
    end
  end

  def edit
    @link = Link.find(params[:id])
  end

  def update
    @link = Link.find(params[:id])
    @link.update(link_params)
    redirect_to root_path
  end

  def mark
    @link = Link.find(params[:id])
    @link.update_attributes(read: true)
    #@link.save
    respond_with @link
  end

  def unmark
    @link = Link.find(params[:id])
    @link.update_attributes(read: false)
    #@link.save
    respond_with @link
  end

  private

  def link_params
    params.require(:link).permit(:title, :url)
  end
end

require 'rails_helper'

RSpec.describe Link, type: :model do

  let(:link) { Link.new(title: "Dots",
                        url: "http://www.dots.com",
                        )}

  it 'is valid' do
    expect(link).to be_valid
  end

  it 'has a read value that defaults to false' do
    refute(link.read)
  end

  it 'validates the url' do
    link.url = "me"

    expect(link).to_not be_valid
  end
end

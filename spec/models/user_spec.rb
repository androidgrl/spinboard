require 'rails_helper'

RSpec.describe User, type: :model do

  let(:user) { User.new(name: "Jamie",
                        email: "jamie@gmail.com",
                        password: "password",
                        )}

  it "is valid" do
    expect(user).to be_valid
  end
end

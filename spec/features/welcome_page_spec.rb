require 'rails_helper'

describe "Welcome Page", :type => :feature do
  it "unauthenticated user sees login and signup form" do
    visit root_path

    expect(page).to have_content("Login")
    expect(page).to have_content("Signup")
  end

  xit "authenticated user sees logout link" do
    visit root_path

    expect(page).to have_content("Login")
    expect(page).to have_content("Signup")
  end
end

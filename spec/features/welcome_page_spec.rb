require 'rails_helper'

describe "Welcome Page", :type => :feature do
  it "unauthenticated user sees login and signup form" do
    visit root_path

    expect(page).to have_content("Login")
    expect(page).to have_content("Signup")
  end

  it "authenticated user sees logout link" do
    visit root_path
    fill_in "Name", with: "jamie"
    fill_in "Email", with: "jamie@gmail.com"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"
    click_on "Signup"

    expect(page).to have_content("Logout")
  end
end

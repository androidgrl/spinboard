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

    expect_user_to_be_signed_in(as: "jamie")
  end

  it 'authenticated user can logout' do
    visit root_path
    fill_in "Name", with: "jamie"
    fill_in "Email", with: "jamie@gmail.com"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"
    click_on "Signup"

    expect_user_to_be_signed_in(as: "jamie")

    click_on "Logout"

    expect_user_to_be_logged_out
  end
end

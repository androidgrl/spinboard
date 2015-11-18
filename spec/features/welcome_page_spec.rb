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
    User.create(name: "Jamie",
                email: "jamie@gmail.com",
                password: "password")
    visit root_path

    fill_in "login-email", with: "jamie@gmail.com"
    fill_in "login-password", with: "password"
    click_on "Login"

    expect_user_to_be_signed_in(as: "Jamie")

    click_on "Logout"

    expect_user_to_be_logged_out
  end
end

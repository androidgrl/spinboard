require 'rails_helper'

describe "Create Link", :type => :feature, :js => true do

  it "an authenticated user can create a link" do
    visit root_path
    fill_in "Name", with: "jamie"
    fill_in "Email", with: "jamie@gmail.com"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"
    click_on "Signup"

    fill_in "title", with: "Blink"
    fill_in "url", with: "http://www.blink.com"
    click_on "Save"

    expect(page).to have_content("Blink")
    expect(page).to have_content("http://bit.ly/1XaRhFP")
  end

  it "an invalid link will result in an error message" do
    visit root_path
    fill_in "Name", with: "jamie"
    fill_in "Email", with: "jamie@gmail.com"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"
    click_on "Signup"

    fill_in "title", with: "Blink"
    fill_in "url", with: "blink.com"
    click_on "Save"

    expect(page).to have_content("Invalid URL")
  end
end

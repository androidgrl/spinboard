require 'rails_helper'

describe "Edit", :type => :feature, :js => true do
  it "edits ideas" do
    visit root_path

    fill_in "Name", with: "jamie"
    fill_in "Email", with: "jamie@gmail.com"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"
    click_on "Signup"

    fill_in "title", with: "Blink"
    fill_in "url", with: "http://www.blink.com"
    click_on "Save"
    id = Link.last.id
    click_on "edit-#{id}"

    fill_in "edit-title", :with => "Blink123"
    fill_in "edit-url", :with => "http://www.blink123.com"

    click_on "Edit"

    expect(page).to have_content("http://bit.ly/1XaRhFP")
    expect(page).to have_content("Blink123")
  end
end

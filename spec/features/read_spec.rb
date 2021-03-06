require 'rails_helper'

describe "Read", :type => :feature, :js => true do

  it "a link has a link to mark as read" do
    visit root_path
    fill_in "Name", with: "jamie"
    fill_in "Email", with: "jamie@gmail.com"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"
    click_on "Signup"

    fill_in "title", with: "Blink"
    fill_in "url", with: "http://www.blink.com"
    click_on "Save"

    expect(page).to have_button("Mark as Read")
  end

  it "the mark as read link changes the read attribute to true" do
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
    click_on "mark-#{id}"

    expect(page).to have_button("Mark as Unread")
  end
end


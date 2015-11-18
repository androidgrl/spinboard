class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.text :title
      t.text :url
      t.boolean :read, default: false

      t.timestamps null: false
    end
  end
end

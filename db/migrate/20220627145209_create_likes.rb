class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.integer :post_id, null: false
      t.timestamps
    end
    add_index :likes, :liker_id
    add_index :likes, :post_id
    add_index :likes, [:liker_id, :post_id], unique:true
    remove_column :posts, :title
    remove_column :posts, :body
    add_column :posts, :title, :text
    add_column :posts, :body, :text, null:false
  end
end

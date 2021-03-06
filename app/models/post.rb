# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  title      :string           not null
#  body       :string
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    validates :author_id, :body, presence: true

    has_one_attached :image
    
    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_many :likes,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Like

    has_many :comments,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Comment

end

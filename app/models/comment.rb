class Comment < ApplicationRecord
    
    validates :commenter_id, :post_id, :body, presence: true

    belongs_to :commenter,
        primary_key: :id,
        foreign_key: :commenter_id,
        class_name: :User

    belongs_to :post,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Post
end

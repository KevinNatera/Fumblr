# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence:true 
    validates :username, :email,  uniqueness:true 
    validates :password, length: { minimum: 6 }, allow_nil:true 

    before_validation :ensure_seession_token
    attr_reader :password

    has_one_attached :avatar 

    has_one_attached :cover 

    has_many :posts,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Post

    has_many :likes,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :Like

    has_many :comments,
        primary_key: :id,
        foreign_key: :commenter_id,
        class_name: :Comment
                                          
    has_many :received_follows,
        primary_key: :id,
        foreign_key: :followee_id, 
        class_name: :Follow
    
    has_many :followers, 
        through: :received_follows, 
        source: :follower
   

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            user 
        else   
            nil
        end
    end 

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password 
    end

    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end

    def generate_session_token
        SecureRandom::urlsafe_base64
    end

    def reset_session_token! 
        self.session_token = generate_session_token
        self.save! 
        self.session_token 
    end

    def ensure_seession_token
        self.session_token ||= generate_session_token
    end
end

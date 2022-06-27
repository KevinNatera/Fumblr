@users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username

      if user.avatar.attached?
        json.avatar_url url_for(user.avatar)
      end
    end 

end
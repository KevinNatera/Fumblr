@users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username, :avatar_url
    end 


    #  url_for(:avatar)
    
end
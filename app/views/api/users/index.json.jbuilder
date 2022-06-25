@users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username
    end 


    #  url_for(:avatar)
    
end
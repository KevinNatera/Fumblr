@posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :author_id, :title, :body, :url, :updated_at
    end 
end
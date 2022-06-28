json.extract! @user,  :id, :username, :email


if @user.avatar.attached?
    json.avatar_url url_for(@user.avatar)
end


if @user.cover.attached?
  json.cover_url url_for(@user.cover)
end


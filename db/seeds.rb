# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

ActiveRecord::Base.transaction do
    User.delete_all
    ActiveRecord::Base.connection.reset_pk_sequence!('users')
    Post.delete_all
    ActiveRecord::Base.connection.reset_pk_sequence!('posts')
    Like.delete_all
    ActiveRecord::Base.connection.reset_pk_sequence!('likes')
    # Comment.delete_all 

    user1 = User.create(
      username: "bob",
      email: "bob.com",
      password: 123456
    )

    user2 = User.create(
        username: "yoo",
        email: "yoo.com",
        password: 123456
    )

    user3 = User.create(
        username: "1",
        email: "1",
        password: 123456
    )

    user4 = User.create(
        username: "Demo User",
        email: "demo@user.com",
        password: 123456
    )

    user5 = User.create(
        username: "Loser User",
        email: "loser@user.com",
        password: 123456
    )

    user6 = User.create(
        username: "0",
        email: "0",
        password: 123456
    )


    post1 = Post.create(
        author_id: 4,
        title: "first",
        body: "The very first post!",
        url: ""
    )

    post2 = Post.create(
        author_id: 4,
        title: "example 2",
        body: "The very SECOND post! It's even BETTER!",
        url: ""
    )

    post3 = Post.create(
        author_id: 2,
        title: "r4t4",
        body: "t42r4r3",
        url: ""
    )

    post4 = Post.create(
        author_id: 1,
        title: "ewifjn",
        body: "4-0rk4po",
        url: ""
    )

    post5 = Post.create(
        author_id: 3,
        title: "f30j9op",
        body: "r02op09rop",
        url: ""
    )

    post6 = Post.create(
        author_id: 5,
        title: "someone",
        body: "like my post plz :(",
        url: ""
    )

    post7 = Post.create(
        author_id: 6,
        title: "They're watching.",
        body: "Right now.",
        url: ""
    )

    post8 = Post.create(
        author_id: 5,
        title: "PLZZZZZZ",
        body: "D':",
        url: ""
    )


    like1 = Like.create(
        liker_id: 2,
        post_id: 1,
    )

    like2 = Like.create(
        liker_id: 1,
        post_id: 1,
    )

    like3 = Like.create(
        liker_id: 4,
        post_id: 3,
    )

    like4 = Like.create(
        liker_id: 3,
        post_id: 1,
    )

    like5 = Like.create(
        liker_id: 5,
        post_id: 1,
    )

    like6 = Like.create(
        liker_id: 1,
        post_id: 5,
    )

    like7 = Like.create(
        liker_id: 3,
        post_id: 4,
    )

    like8 = Like.create(
        liker_id: 4,
        post_id: 5,
    )

    like9 = Like.create(
        liker_id: 4,
        post_id: 2,
    )

    basicAttackPic1 = open("https://fumblr11-seeds.s3.amazonaws.com/basic_attack_copy.png")
    goldPic1 = open("https://fumblr11-seeds.s3.amazonaws.com/gold+copy.png")
    healPic1 = open("https://fumblr11-seeds.s3.amazonaws.com/heal+copy.png")
    defaultBatman1 = open("https://fumblr11-seeds.s3.amazonaws.com/default_batman.png")
    defaultBatman2 = open("https://fumblr11-seeds.s3.amazonaws.com/default_batman.png")
    defaultBatman3 = open("https://fumblr11-seeds.s3.amazonaws.com/default_batman.png")

    user1.avatar.attach(io: basicAttackPic1, filename: 'basic_attack_copy.png')
    user1.save! 
    user2.avatar.attach(io: goldPic1, filename: 'gold_copy.png')
    user2.save! 
    user3.avatar.attach(io: healPic1, filename: 'heal_copy.png')
    user3.save! 
    user4.avatar.attach(io: defaultBatman1, filename: 'default_batman.png')
    user4.save! 
    user5.avatar.attach(io: defaultBatman2, filename: 'default_batman.png')
    user5.save! 
    user6.avatar.attach(io: defaultBatman3, filename: 'default_batman.png')
    user6.save! 

    # comment1 = Comment.create(
    #     id: 1,
    #     user_id: 1,
    #     artwork_id: 1,
    #     body: "I'M THE GREATEST"
    # )

  
  end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

ActiveRecord::Base.transaction do
    User.destroy_all
    ActiveRecord::Base.connection.reset_pk_sequence!('users')
    Post.destroy_all
    ActiveRecord::Base.connection.reset_pk_sequence!('posts')
    Like.destroy_all
    ActiveRecord::Base.connection.reset_pk_sequence!('likes')
    Comment.destroy_all
    ActiveRecord::Base.connection.reset_pk_sequence!('comments')
    Follow.destroy_all
    ActiveRecord::Base.connection.reset_pk_sequence!('follows')
    
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

    post9 = Post.create(
        author_id: 4,
        title: "Use the Demo Login button for easy access!",
        body: "No sign up required, jump in and start posting!",
        url: ""
    )

    post10 = Post.create(
        author_id: 4,
        title: "Welcome to Fumblr!",
        body: "This is a fullstack clone of the popular social media website Tumblr. Please sign in to create and interact with posts as well as follow other users.",
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

    like10 = Like.create(
        liker_id: 4,
        post_id: 10,
    )

    like11 = Like.create(
        liker_id: 3,
        post_id: 10,
    )

    like12 = Like.create(
        liker_id: 2,
        post_id: 10,
    )

    like13 = Like.create(
        liker_id: 4,
        post_id: 9,
    )

    like14 = Like.create(
        liker_id: 3,
        post_id: 9,
    )

    comment1 = Comment.create(
        commenter_id: 3,
        post_id: 2,
        body: "Nah the first post got it"
    )

    comment2 = Comment.create(
        commenter_id: 4,
        post_id: 6,
        body: "Get a load of this fella"
    )

    comment3 = Comment.create(
        commenter_id: 6,
        post_id: 6,
        body: "No one likes you."
    )

    comment4 = Comment.create(
        commenter_id: 4,
        post_id: 5,
        body: "wat"
    )

    comment5 = Comment.create(
        commenter_id: 1,
        post_id: 5,
        body: "He is speaking the language of the gods."
    )

    comment6 = Comment.create(
        commenter_id: 4,
        post_id: 8,
        body: "Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ac tincidunt 
        vitae semper quis lectus nulla. Habitant morbi tristique senectus 
        et netus et malesuada fames. Duis ut diam quam nulla porttitor massa 
        id neque. Feugiat scelerisque varius morbi enim nunc faucibus a. Dolor sit 
        amet consectetur adipiscing elit ut aliquam purus sit. Amet consectetur adipiscing 
        elit ut aliquam purus. Pretium lectus quam id leo in vitae turpis massa. Cursus sit amet dictum
        sit amet justo donec enim diam. Sit amet facilisis magna etiam tempor orci. Id semper 
        risus in hendrerit gravida. Lorem dolor sed viverra ipsum nunc. Condimentum lacinia quis 
        vel eros donec. Phasellus vestibulum lorem sed risus ultricies."
    )

    follow1 = Follow.create(
        follower_id: 4,
        followee: user6
    )

    follow2 = Follow.create(
        follower_id: 6,
        followee: user4
    )

    follow3 = Follow.create(
        follower_id: 4,
        followee: user1
    )

    follow4 = Follow.create(
        follower_id: 4,
        followee: user3
    )

    follow5 = Follow.create(
        follower_id: 5,
        followee: user4
    )

    follow6 = Follow.create(
        follower_id: 5,
        followee: user1
    )

    follow7 = Follow.create(
        follower_id: 5,
        followee: user6
    )

    follow8 = Follow.create(
        follower_id: 5,
        followee: user2
    )

    follow9 = Follow.create(
        follower_id: 5,
        followee: user3
    )

    
    
    # basicAttackPic1 = open("https://fumblr11-seeds.s3.amazonaws.com/basic_attack_copy.png")
    # goldPic1 = open("https://fumblr11-seeds.s3.amazonaws.com/gold+copy.png")
    # healPic1 = open("https://fumblr11-seeds.s3.amazonaws.com/heal+copy.png")
    # defaultBatman1 = open("https://fumblr11-seeds.s3.amazonaws.com/default_batman.png")

    # defaultBatman2 = open("https://fumblr11-seeds.s3.amazonaws.com/default_batman.png")
    # defaultBatman3 = open("https://fumblr11-seeds.s3.amazonaws.com/default_batman.png")

    # user1.avatar.attach(io: basicAttackPic1, filename: 'basic_attack_copy.png')
    # user1.save! 
    # user2.avatar.attach(io: goldPic1, filename: 'gold_copy.png')
    # user2.save! 
    # user3.avatar.attach(io: healPic1, filename: 'heal_copy.png')
    # user3.save! 
    # user4.avatar.attach(io: defaultBatman1, filename: 'default_batman.png'
    # user4.save! 

    # user5.avatar.attach(io: defaultBatman2, filename: 'default_batman.png')
    # user5.save! 
    # user6.avatar.attach(io: defaultBatman3, filename: 'default_batman.png')
    # user6.save! 

  
  end

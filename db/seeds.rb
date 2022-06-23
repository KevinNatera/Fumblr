# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
    User.delete_all
    ActiveRecord::Base.connection.reset_pk_sequence!('users')
    Post.delete_all
    ActiveRecord::Base.connection.reset_pk_sequence!('posts')
    # Comment.delete_all 
    # Like.delete_all 

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

    # comment1 = Comment.create(
    #     id: 1,
    #     user_id: 1,
    #     artwork_id: 1,
    #     body: "I'M THE GREATEST"
    # )

    # like1 = Like.create(
    #     id: 1,
    #     user_id: 1,
    # )

  end

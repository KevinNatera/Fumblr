# Fumblr

## Sample State Shape


{
    entities: {
    
      post: {
      
        1: {
          id: 1,
          title: "First Post"
          body: "various sentences",
          authorId: 1,
        },
        2: {
          id: 2,
          imageUrl: "picture_of_an_object32897432401.jpg"
          body: "thing",
          authorId: 27,
        },
      },
      users: {
        1: {
          id: 41,
          username: "the_coolest_user",    
          imageUrl: "really_cool_guy.jpg"   
        },
        12: {
          id: 12,
          username: "average joe"
        }
      },
      likes: {
          1: {
             id: 1, 
             userId: 2,
             postId: 1
          }
      }
    },
    ui: {
      loading: true/false,
      modal: true/false
    },
    errors: {
      login: ["Incorrect username/password combination"],
      postForm: ["Post body cannot be blank"],
    },
    session: { currentUserId: 12 }
}

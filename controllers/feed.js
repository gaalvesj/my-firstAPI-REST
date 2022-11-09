exports.getPosts = (req, res, next) => {
   res.json({posts: [{
    _id: '1',
   title: 'Primeiro Post',
   content: 'Esse é meu primeiro post',
   imageUrl: 'images/Yellow_Duck.jpg',
    creator: {
        name: 'Gabriel'
    },
    createdAt: new Date()
}
]
  });
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({
        message: 'Post created successfully!',
        post: { id: new Date().toISOString(), title: title, content: content }
    });
};
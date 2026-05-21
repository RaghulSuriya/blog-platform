package backend.controller;

import backend.model.Comment;
import backend.model.Post;
import backend.repository.CommentRepository;
import backend.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class BlogController {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentRepository commentRepository;

    @PostMapping("/posts")
    public Post addPost(@RequestBody Post post) {
        return postRepository.save(post);
    }

    @GetMapping("/posts")
    public List<Post> getPosts() {
        return postRepository.findAll();
    }

    @PostMapping("/comments")
    public Comment addComment(@RequestBody Comment comment) {
        return commentRepository.save(comment);
    }

    @GetMapping("/comments")
    public List<Comment> getComments() {
        return commentRepository.findAll();
    }
}
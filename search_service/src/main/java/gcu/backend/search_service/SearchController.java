package gcu.backend.search_service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:3000")
@RestController
@EnableJpaAuditing
public class SearchController {
    @Autowired
    private final SearchRepository searchRepository;
    public SearchController(SearchRepository searchRepository) {
        this.searchRepository = searchRepository;


    }

    @PostMapping("/api/search")
    public String create(
            @RequestParam("author") String author,
            @RequestParam("content") String content){
        Search search = new Search();

        search.setAuthor(author);
        search.setContent(content);

        searchRepository.save(search);
        return "search create ok";
    }


    @GetMapping("/api/search")
    public List<Search> getAllSearch() {
        return searchRepository.findAll();
    }

    @GetMapping("/api/search/{id}")
    public ResponseEntity<?> getSearchId(@PathVariable("id") Long id) {
        Optional<Search> optionalSearch = searchRepository.findById(id);
        if (optionalSearch.isPresent()) {
            Search search = optionalSearch.get();
            // 게시글 데이터를 반환하는 코드
            return ResponseEntity.ok(search);
        } else {
            // 게시글이 없는 경우 NoPage로 리다이렉트하는 코드
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("NoPage");
        }
    }

    @PostMapping("/api/search/recommendation")
    public String recommendSearch(@RequestBody RecommendationRequest request) {
        Long postId = request.getPostId();
        Optional<Search> optionalSearch = searchRepository.findById(postId);
        if (optionalSearch.isPresent()) {
            Search search = optionalSearch.get();
            search.setRecommendation(search.getRecommendation() + 1);
            searchRepository.save(search);
            return "Search recommendation updated";
        } else {
            return "Search not found";
        }
    }

    @GetMapping("/api/search/ranked")
    public List<Search> getRankedSearch() {
        Sort sort = Sort.by(Sort.Direction.DESC, "recommendation");
        return searchRepository.findAll(sort);
    }



    @PutMapping("/api/search/{id}")
    public ResponseEntity<String> updateSearch(
            @PathVariable("id") Long id,
            @RequestBody Search updatedSearch
    ) {
        Optional<Search> optionalSearch = searchRepository.findById(id);
        if (optionalSearch.isPresent()) {
            Search search = optionalSearch.get();
            search.setContent(updatedSearch.getContent());
            searchRepository.save(search);
            return ResponseEntity.ok("Search updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/api/search/{id}")
    public String deleteSearch(@PathVariable("id") Long id) {
        Optional<Search> optionalSearch = searchRepository.findById(id);
        if (optionalSearch.isPresent()) {
            Search search = optionalSearch.get();

            // Delete the associated image file if it exists


            searchRepository.delete(search);
            return "Search deleted successfully";
        } else {
            return "Search not found";
        }
    }


}


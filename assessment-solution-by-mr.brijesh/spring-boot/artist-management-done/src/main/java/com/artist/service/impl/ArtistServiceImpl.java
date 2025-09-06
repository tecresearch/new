package com.artist.service.impl;

import com.artist.dto.ArtistRequest;
import com.artist.model.Artist;
import com.artist.repository.ArtistRepository;
import com.artist.service.ArtistService;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ArtistServiceImpl implements ArtistService {
    private final ArtistRepository repo;

    public ArtistServiceImpl(ArtistRepository repo) {
        this.repo = repo;
    }

    @Override
    public Artist createArtist(ArtistRequest req) {
        Artist a=new Artist();
        a.setFirstName(req.firstName());
        a.setLastName(req.lastName());
        return repo.save(a);
    }

    @Override
    public List<Artist> getArtists() {
        return repo.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    @Override
    public Artist getArtistByID(Long id) {
        if(repo.existsById(id)){
            return repo.findById(id).get();
        }else{
            return null;
        }
    }

    @Override
    public void deleteArtist(Long id) {
        repo.deleteById(id);
    }
}

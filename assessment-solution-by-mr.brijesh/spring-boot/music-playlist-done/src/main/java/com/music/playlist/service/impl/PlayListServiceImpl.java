package com.music.playlist.service.impl;

import com.music.playlist.dto.PlayListRequest;
import com.music.playlist.model.PlayList;
import com.music.playlist.repository.PlayListRepository;
import com.music.playlist.service.PlayListService;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class PlayListServiceImpl implements PlayListService {

    private PlayListRepository repository;

    public PlayListServiceImpl(PlayListRepository repository) {
        this.repository = repository;
    }

    @Override
    public PlayList createPlayList(PlayListRequest request) {
        PlayList p=new PlayList();
        p.setName(request.name());
        p.setTracksCount(request.tracksCount());
        p.setCreatedDate(Date.from(Instant.now()));
        return repository.save(p);
    }

    @Override
    public List<PlayList> getPlayLists() {
        return repository.findAll();
    }

    @Override
    public PlayList getPlayListByID(Long id) {
        if(repository.existsById(id)){
            return repository.findById(id).get();
        }else{
            return null;
        }
    }

    @Override
    public void deletePlayList(Long id) {
        if(repository.existsById(id)){
            repository.deleteById(id);
        }
    }
}

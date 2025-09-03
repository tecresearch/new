package com.music.streaming.platform.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;

@Entity
@Table(name = "track")
@Getter
@Setter
public class Track extends Audit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "track_id")
    private Long id;
    @Column(name = "title")
    private String title;
    @Column(name = "album_name")
    private String albumName;
    @Column(name = "release_date")
    private LocalDate releaseDate;
    @Column(name = "duration")
    private String duration;
    @Column(name = "genre")
    private String genre;
    @Column(name = "description")
    private String description;
    @Column(name = "playCount")
    private Integer playCount;
    @Column(name = "file_url")
    private String fileUrl;
    @Column(name = "cover_image")
    private String coverImage;
    @ManyToOne
    @JoinColumn(name = "artist_id")
    private Artist artist;
	public Track(Long id, String title, String albumName, LocalDate releaseDate, String duration, String genre,
			String description, Integer playCount, String fileUrl, String coverImage, Artist artist) {
		super();
		this.id = id;
		this.title = title;
		this.albumName = albumName;
		this.releaseDate = releaseDate;
		this.duration = duration;
		this.genre = genre;
		this.description = description;
		this.playCount = playCount;
		this.fileUrl = fileUrl;
		this.coverImage = coverImage;
		this.artist = artist;
	}
	public Track() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAlbumName() {
		return albumName;
	}
	public void setAlbumName(String albumName) {
		this.albumName = albumName;
	}
	public LocalDate getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(LocalDate releaseDate) {
		this.releaseDate = releaseDate;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Integer getPlayCount() {
		return playCount;
	}
	public void setPlayCount(Integer playCount) {
		this.playCount = playCount;
	}
	public String getFileUrl() {
		return fileUrl;
	}
	public void setFileUrl(String fileUrl) {
		this.fileUrl = fileUrl;
	}
	public String getCoverImage() {
		return coverImage;
	}
	public void setCoverImage(String coverImage) {
		this.coverImage = coverImage;
	}
	public Artist getArtist() {
		return artist;
	}
	public void setArtist(Artist artist) {
		this.artist = artist;
	}
	@Override
	public String toString() {
		return "Track [id=" + id + ", title=" + title + ", albumName=" + albumName + ", releaseDate=" + releaseDate
				+ ", duration=" + duration + ", genre=" + genre + ", description=" + description + ", playCount="
				+ playCount + ", fileUrl=" + fileUrl + ", coverImage=" + coverImage + ", artist=" + artist + "]";
	}
    
    
}

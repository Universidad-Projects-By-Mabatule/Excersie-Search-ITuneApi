# Tx-Excersie_Internship_Search in Angular
## Resume
The exercise was generated with Angular CLI and Angular Material was implemented. The task consists of consuming the iTunes Search API and displaying the search results it provides.


![Alt Text](https://github.com/mabatule1999/Tx-Excersie_Internship_Search/blob/develop/exerciseSearchITune/src/assets/images/presenter.gif)


## Notes
It was taken into account that in the search examples there are several 'terms' and the most favorable and significant for the key was selected. 
| Media Type  | Entities |
| -------     | -------- |
| movie       | movieArtist, movie    |
| podcast     | podcastAuthor, podcast    |
| music       | musicArtist, musicTrack, album, musicVideo, mix, song. Please note that “musicTrack” can include both songs and music videos in the results.    |
| musicVideo  | musicArtist, musicVideo    |
| audiobook   | audiobook    |
| shortFilm   | shortFilmArtist, shortFilm    |
| tvShow      | tvEpisode, tvSeason    |
| software    | software, iPadSoftware, macSoftware    |
| ebook       | ebook    |
| all         | movie, album, allArtist, podcast, musicVideo, mix, audiobook, tvSeason, allTrack    |
## Search Examples

The following are examples of fully-qualified URLs for specific search requests:
To search for all Jack Johnson audio and video content (movies, podcasts, music, music videos, audiobooks, short films, and tv shows), use the following URL:
###
      https://itunes.apple.com/search?term=jack+johnson.

To search for all Jack Johnson audio and video content and return only the first 25 items, use the following URL: 
### 
      https://itunes.apple.com/search?term=jack+johnson&limit=25.

To search for only Jack Johnson music videos, use the following URL: 
### 
      https://itunes.apple.com/search?term=jack+johnson&entity=musicVideo.

To search for all Jim Jones audio and video content and return only the results from the Canada iTunes Store, use the following URL: 
### 
      https://itunes.apple.com/search?term=jim+jones&country=ca.

To search for applications titled “Yelp” and return only the results from the United States iTunes Store, use the following URL: 
      https://itunes.apple.com/search?term=yelp&country=us&entity=software.
      
### Project installation
      npm install      
### Command to Execute the Project from console
      ng serve
